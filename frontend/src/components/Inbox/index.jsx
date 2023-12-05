import { useState, useEffect } from 'react'
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


export const Inbox = ({ user, token }) => {
    const [mails, setMails] = useState([])
    const [selectedMail, setSelectedMail] = useState({})
    const { ref, inView } = useInView()
    const {
        status,
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        dataUpdatedAt,
    } = useMails(user.userId);


    const { friendsList } = useFriendsList();

    useEffect(() => {
        if (inView && !isFetching && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    useEffect(() => {
        try {
            if (data?.pages) {
                const aggregatedData = data.pages.flatMap(page => page.mails);
                setMails(aggregatedData);
                if (aggregatedData.length > 0) {
                    setSelectedMail(aggregatedData[0]);
                }
            }
        } catch (e) {
            console.log(e)
            // router.push('/login');
        }
    }, [data]);

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
                        {isFetching && !isFetchingNextPage ?
                            <div className='flex flex-col flex-1 justify-center items-center h-full'>
                                <CircularProgress size={'36px'} /> </div>
                            : null
                        }
                        {friendsList.map((friend) => <Friend key={friend.id} friend={friend} />)}
                    </div>
                </div >

                {/* 信件欄位 */}
                <div className='flex flex-col w-[75%] m-6 gap-4'>
                    <FriendCard user={user} selectedMail={selectedMail} />
                    <div className='flex w-full h-[85%] max-h-full border rounded-r'>
                        <div className="flex flex-col w-[35%] bg-white border-r min-w-[200px]">
                            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100 flex-1">
                                {isFetching && !isFetchingNextPage ?
                                    <div className='flex flex-col h-full justify-center items-center'>
                                        <CircularProgress size={'36px'} />
                                    </div>
                                    : null
                                }
                                {mails.map((mail) => <Mail key={mail.id} mail={mail} isSelected={mail.id === selectedMail.id} setSelectedMail={setSelectedMail} />)}
                                <div ref={ref} />
                            </div>
                        </div>
                        <div className="flex flex-col w-[65%] p-6">
                            <div className="flex items-start justify-between border-b pb-4">
                                <div className="text-2xl font-semibold">{selectedMail.subject}</div>
                                <div className="flex flex-col items-end">
                                    <div className='mb-1'>{selectedMail.sender_username}</div>
                                    <div className="text-sm text-gray-500">{formatMailDate(selectedMail.created_at)}</div>
                                </div>
                            </div>
                            <div className="flex-grow mt-4"> {/*className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100 mt-4"*/}
                                {/* <div className="whitespace-pre-wrap text-lg">
                                    {selectedMail.content}
                                </div> */}
                                <Quill />
                            </div>
                            <div className="mt-2">
                                <form>
                                    {/* <Editor /> */}
                                    <div className="flex justify-end mt-2">
                                        <Button className="text-2xl">Send</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}