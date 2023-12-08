import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "./Mail"
import { Friend } from "./Friend"
import { useMails } from '@/hooks/useMail'
import { useFriendsList } from '@/hooks/useFriendsList';
import { formatMailDate } from '@/lib/formatDate';
import { FriendCard } from './FriendCard';
import Quill from '@/components/Quill';
import { FaSave } from "react-icons/fa";
import { IoIosAddCircle, IoMdSend } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import axios from '../../api';
import getDistance from '@/api/getDistance';
import { ca } from 'date-fns/locale';
import { set } from 'date-fns';


export const Inbox = ({ user, token, location }) => {
    const [mails, setMails] = useState([])
    const [selectedFriend, setSelectedFriend] = useState({})
    const [selectedMail, setSelectedMail] = useState({})
    const [isSending, setIsSending] = useState(false)

    const [isEditting, setIsEditting] = useState(false)
    let newMail = { ...selectedMail }
    const { ref, inView } = useInView()
    const {
        status,
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        dataUpdatedAt,
        refetch,
        isRefetching,
    } = useMails(user.userId, token);
    const { status: friendStatus, friendsList } = useFriendsList();

    useEffect(() => {
        if (inView && !isFetching && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    useEffect(() => {
        try {
            if (data?.pages) {
                let aggregatedData = data.pages.flatMap(page => page.mails);
                // console.log('aggregatedData', aggregatedData)
                aggregatedData = aggregatedData.filter(mail => {
                    // sender is me
                    if (mail.sender_id == user.userId) {
                        return true;
                    }
                    // receiver is me and sender is friend and not draft
                    if (mail.receiver_id == user.userId && mail.status !== 'draft') {
                        return true;
                    }
                });
                setMails(aggregatedData);
                if ((selectedMail?.id === undefined || selectedMail.id === -1) && aggregatedData.length > 0) {
                    setSelectedMail(aggregatedData[0]);
                    const friend = friendsList.find(friend => friend.id == aggregatedData[0].sender_id || friend.id == aggregatedData[0].receiver_id);
                    setSelectedFriend(friend);
                } else {
                    setSelectedMail(aggregatedData.find(mail => mail.id === selectedMail.id));
                    const friend = friendsList.find(friend => friend.id == selectedMail.sender_id || friend.id == selectedMail.receiver_id);
                    console.log('friend', friend)
                    setSelectedFriend(friend);
                }
                setIsSending(false);
            }
        } catch (e) {
            console.log(e)
        }
    }, [data, friendsList]);

    useEffect(() => {
        if (!isEditting) {
            refetch();
        }
    }, [isEditting, refetch]);

    const handleSave = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };
        if (newMail.id !== -1) {
            const { data } = await axios.patch(`/mail/${newMail.id}`, {
                senderId: newMail.sender_id,
                newSubject: newMail.subject,
                newContent: newMail.content,
            }, { headers });
            console.log('data', data, newMail.subject);
        } else {
            const { data } = await axios.post(`/mail`, {
                sender_id: newMail.sender_id,
                receiver_id: newMail.receiver_id,
                subject: newMail.subject,
                content: newMail.content,
                status: newMail.status,
            }, { headers });
            console.log('data', data, newMail.subject);
        }
        refetch();
    }

    const handleNewMail = () => {
        if (isEditting) {
            handleSave();
        }
        newMail = {
            id: -1,
            sender_id: user.userId,
            receiver_id: selectedFriend.id,
            content: '',
            status: 'draft',
            created_at: new Date(),
            subject: '預設標題',
            sender_username: user.username,
            receiver_username: selectedFriend.username,
        }
        setMails([newMail, ...mails]);
        setSelectedMail(newMail);
        setIsEditting(true);
    }

    let friendMails = mails
        .filter(mail => mail.receiver_id == selectedFriend?.id || mail.sender_id == selectedFriend?.id)


    if (friendMails.length > 0 && (selectedMail?.receiver_id != selectedFriend?.id && selectedMail?.sender_id != selectedFriend?.id)) {
        setSelectedMail(friendMails[0]);
    }

    const handleSend = async () => {
        setIsSending(true);
        setIsEditting(false);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };
        console.log(user, selectedFriend)
        let distance = 2400;
        const SPEED_PER_HOUR = 100;
        try {
            const res = await getDistance(user.country_code, selectedFriend.country_code)
            distance = res.distance;
        } catch (e) {
            console.log(e)
        }
        const changedMail = {
            ...selectedMail,
            status: 'sending',
            sent_at: new Date(),
            arrived_at: new Date(new Date().getTime() + (distance / SPEED_PER_HOUR) * 60 * 60 * 1000),
        }
        try {
            const { data } = await axios.patch(`/mail/${changedMail.id}`, {
                senderId: changedMail.sender_id,
                newSubject: changedMail.subject,
                newContent: changedMail.content,
                newStatus: changedMail.status,
                newSentAt: changedMail.sent_at,
                newArrivedAt: changedMail.arrived_at,
            }, { headers });
            console.log('data', data, newMail.subject);
            refetch();
        } catch (e) {
            console.log(e)
        }
    }

    return (
        user.userId === '' ?
            <div>
                <CircularProgress sx={{ color: "black", marginRight: '16px' }} />
                <p>Redirect to Login page now...</p>
            </div>
            :
            // lg:h-[90%] lg:w-[90%] lg:max-w-full lg:mx-auto lg:border lg:rounded-md lg:shadow
            <div className="flex h-full w-full justify-center">

                {/* 朋友欄位 */}
                <div className="box-border border flex flex-col max-h-full w-[20%] my-6 ml-6 rounded min-w-[180px]">
                    <div className="bg-gray-100 h-15 px-1 py-1 border-b rounded-t">
                        <Input placeholder="Search friends..." />
                    </div>
                    <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-50 flex-1">
                        {friendStatus === 'loading' ?
                            <div className='flex flex-col flex-1 justify-center items-center h-full'>
                                <CircularProgress size={'36px'} /> </div>
                            : null
                        }
                        {friendsList.map((friend) =>
                            <Friend
                                isSelected={friend.id == selectedFriend?.id}
                                key={friend.id}
                                friend={friend}
                                // isSelected={friend.id == selectedFriend.id}
                                handleClick={() => { setSelectedFriend(friend) }}
                            />)}
                    </div>
                </div >

                {/* 信件欄位 */}
                <div className='flex flex-col w-[75%] m-6 gap-4'>
                    <FriendCard selectedFriend={selectedFriend} />
                    <div className='flex w-full h-[85%] max-h-full border rounded'>
                        <div className="flex flex-col w-[35%] bg-white border-r min-w-[200px]">
                            <div className='p-2 font-semibold flex justify-between  items-center border-b shadow'>
                                <p className='text-xl ml-2'>Mails</p>
                                <IoIosAddCircle
                                    className='text-3xl text-app-primary cursor-pointer'
                                    onClick={handleNewMail}
                                />
                            </div>
                            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100 flex-1">
                                {
                                    friendMails.length > 0 ?
                                        friendMails
                                            // .filter((mail) => mail.sender_id == selectedFriend.id || mail.receiver_id == selectedFriend.id)
                                            .map((mail) =>
                                                <Mail
                                                    key={mail.subject + mail.created_at}
                                                    mail={mail}
                                                    userId={user.userId}
                                                    isSelected={mail.id === selectedMail.id}
                                                    setSelectedMail={(mail) => {
                                                        if (isEditting) {
                                                            handleSave();
                                                            setIsEditting(false);
                                                        }
                                                        setSelectedMail(mail);
                                                    }}
                                                />) : null
                                }
                                {((mails.length == 0 && isFetching) || isFetchingNextPage) &&
                                    <div className='flex flex-col h-full justify-center items-center'>
                                        <CircularProgress size={'36px'} />
                                    </div>
                                }
                                <div ref={ref} />
                            </div>
                        </div>
                        <div className="flex flex-col w-[65%] p-6">
                            <div className="flex items-start justify-between border-b pb-4">
                                <div className="text-2xl font-semibold flex space-x-1 items-center max-w-[80%]">
                                    {(new Date(newMail.arrived_at) < new Date() || newMail.sender_id == user.userId) &&
                                        <>
                                            <EditText
                                                style={{ padding: '4px', margin: 0 }}
                                                className='truncate'
                                                value={newMail.subject}
                                                readonly={!isEditting}
                                                onChange={(e) => {
                                                    if (e.target.value.length > 20) {
                                                        return;
                                                    }
                                                    if (e.target.value.length == 0) {
                                                        e.target.value = ' ';
                                                    }
                                                    newMail.subject = e.target.value;
                                                    setSelectedMail(newMail);
                                                }}
                                                onSave={() => {
                                                    newMail.subject = newMail.subject.trim();
                                                    handleSave();
                                                }}
                                            />
                                            {
                                                newMail?.status == 'draft'
                                                    ? isEditting ?
                                                        <FaSave className='text-2xl cursor-pointer'
                                                            onClick={() => { setIsEditting(false); handleSave(); }} /> :
                                                        <MdEdit className='text-2xl cursor-pointer' onClick={() => setIsEditting(true)} />
                                                    : null
                                            }
                                        </>
                                    }
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className='mb-1'>{(new Date(newMail.arrived_at) < new Date() || newMail.sender_id == user.userId)
                                        && selectedMail?.sender_username}</div>
                                    <div className="text-sm text-gray-500">
                                        {(new Date(newMail.arrived_at) < new Date() || newMail.sender_id == user.userId) && formatMailDate(selectedMail?.updated_at || selectedMail?.created_at)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 mt-4 overflow-hidden">
                                <Quill key={newMail.id} userId={user.userId} mail={newMail} selectedMail={selectedMail} handleSave={handleSave} isEditting={isEditting} setIsEditting={setIsEditting} />
                            </div>
                            <div className="mt-2">
                                {/* <Editor /> */}
                                {
                                    newMail.status == 'draft' &&
                                    <div className="flex justify-end">
                                        <button
                                            className="flex justify-center items-center font-semibold text-xl bg-app-primary rounded-lg text-app-content px-3 py-3"
                                            onClick={handleSend}
                                        >
                                            Send
                                            {isSending ?
                                                <CircularProgress size={'20px'} className='text-app-content ml-1' /> :
                                                <IoMdSend style={{ marginLeft: '5px' }} />}
                                        </button>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}