import { useState, useEffect, useReducer } from 'react'
import { useInView } from 'react-intersection-observer'
import axios from '../../api/index'
import CircularProgress from '@mui/material/CircularProgress';
import { Input } from "@/components/ui/input"
import { Mail } from "./Mail"
import { Friend } from "./Friend"
import { useMails, useSaveMail, useSendMail } from '@/components/Inbox/hooks/useMail'
import { useFriendsList } from '@/components/Inbox/hooks/useFriendsList';
import { formatMailDate } from '@/lib/formatDate';
import { FriendCard } from './FriendCard';
import Quill from '@/components/Quill';
import { FaSave } from "react-icons/fa";
import { IoIosAddCircle, IoMdSend } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import Countdown from 'react-countdown';

export const Inbox = ({ user, token }) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [mails, setMails] = useState([])
  const [selectedFriendId, setSelectedFriendId] = useState(null)
  const [selectedMailId, setSelectedMailId] = useState(null)
  const [isSending, setIsSending] = useState(false)
  const [isEditting, setIsEditting] = useState(false);
  const [newMailId, setNewMailId] = useState(null);

  const { ref, inView } = useInView()
  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMails(user.userId, token);
  const { status: friendStatus, friendsList } = useFriendsList();

  useEffect(() => {
    if (data?.pages) {
      const aggregatedData =
        data.pages
          .flatMap(page => page.mails)
          .filter(mail => (mail.sender_id == user.userId) || (mail.receiver_id == user.userId && mail.status !== 'draft'))
          .sort((a, b) => new Date(b.arrived_at || b.updated_at || b.created_at) - new Date(b.arrived_at || a.updated_at || a.created_at));

      setMails(aggregatedData);

      if (!selectedMailId) {
        setSelectedMailId(aggregatedData[0]?.id);
      }

      if (isSending) {
        setIsSending(false);
      }

      if (friendsList.length > 0 && !selectedFriendId && selectedMailId) {
        const friend = friendsList.find(friend => friend.id == aggregatedData[0].sender_id || friend.id == aggregatedData[0].receiver_id);
        setSelectedFriendId(friend.id);
      }
    }
  }, [data, friendsList, setIsSending, isSending, selectedFriendId, selectedMailId, user.userId, newMailId]);


  useEffect(() => {
    if (!selectedFriendId && friendsList.length > 0 && mails.length > 0) {
      // find the first friend who has mail, the sender_id or receiver_id is the friend's id
      const friendId = mails[0]?.sender_id !== user.userId ? mails[0]?.sender_id : mails[0]?.receiver_id;
      setSelectedFriendId(friendId);
    }
  }, [friendsList, selectedFriendId, mails, user.userId])

  const friendMails = mails.filter(mail => mail.receiver_id === selectedFriendId || mail.sender_id === selectedFriendId)

  // useEffect 可
  if (friendMails.length > 0 && (friendMails.some(mail => mail.id === selectedMailId) === false)) {
    setSelectedMailId(friendMails[0].id)
  } else if (newMailId && mails.some(mail => mail.id === newMailId)) {
    setSelectedMailId(newMailId);
    setIsEditting(true);
    setNewMailId(null);
  }

  useEffect(() => {
    if (inView && !isFetching && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, fetchNextPage, hasNextPage, isFetchingNextPage])

  const selectedMail = friendMails.find(mail => mail.id === selectedMailId);
  const selectedFriend = friendsList.find(friend => friend.id === selectedFriendId);
  const isSelectedMailArrived = selectedMail && (new Date(selectedMail.arrived_at) < new Date());
  const isSelectedMailMine = selectedMail && (selectedMail.sender_id == user.userId);

  const mutationSave = useSaveMail(token);
  const mutationSend = useSendMail(token, setIsSending, setIsEditting);

  const handleSave = async () => {
    if (!selectedMail) {
      return;
    }

    if (!isEditting) {
      return;
    }

    mutationSave.mutate(
      { mail: selectedMail }
    );
  }

  const handleSend = async () => {
    console.log('send');
    setIsSending(true);
    setIsEditting(false)
    let distance = 1.6;
    const SPEED_PER_HOUR = 100;

    if (user.country_code !== selectedFriend.country_code) {
      try {
        const { data }
          = await axios.get('/location/test', {
            params: {
              country1: user.country_code,
              country2: selectedFriend.country_code,
            }
          })
        distance = data.distance;
        console.log('distance', distance)
      } catch (e) {
        console.log(e)
      }
    }

    const changedMail = {
      ...selectedMail,
      status: 'sending',
      sent_at: new Date(),
      arrived_at: new Date(new Date().getTime() + (distance / SPEED_PER_HOUR) * 60 * 60 * 1000),
    }

    mutationSend.mutate({ mail: changedMail }, {});
  }

  const handleNewMail = async () => {
    if (isEditting) {
      await handleSave();
    }
    const newMail = {
      id: -1,
      isNew: true,
      sender_id: user.userId,
      sender_username: user.username,
      receiver_id: selectedFriendId,
      receiver_username: selectedFriend.username,
      subject: '標題',
      content: '',
      status: 'draft',
      created_at: new Date(),
    }
    // setMails([newMail, ...mails]);
    // setSelectedMailId(newMail.id);
    const mailId = await mutationSave.mutateAsync(
      { mail: newMail }
    );
    setNewMailId(mailId);
  }

  return (
    (!user.userId && status === 'success') ?
      <div className='flex w-full justify-center my-8 items-center'>
        <CircularProgress sx={{ color: "black", margin: 'auto' }} />
        <p>Redirect to Login page now...</p>
      </div>
      :
      <div className="flex h-full w-full justify-center">

        {/* 朋友欄位 */}
        <div className="box-border border flex flex-col max-h-full my-6 ml-6 rounded min-w-[232px]">
          <div className="bg-gray-100 h-15 px-1 py-1 border-b rounded-t">
            <Input placeholder="Search friends..." />
          </div>
          <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-50 flex-1">
            {friendStatus === 'loading' &&
              <div className='flex flex-col flex-1 justify-center items-center h-full'>
                <CircularProgress size={'36px'} />
              </div>
            }
            {friendsList.map((friend) =>
              <Friend
                isSelected={friend.id === selectedFriendId}
                key={friend.id}
                friend={friend}
                handleClick={() => {
                  if (isEditting) {
                    handleSave();
                    setIsEditting(false);
                  }
                  setSelectedFriendId(friend.id)
                }}
              />)}
          </div>
        </div >

        {/* 信件欄位 */}
        <div className='flex flex-col w-[74%] m-6 gap-4'>
          <FriendCard selectedFriend={selectedFriend} />
          <div className='flex w-full flex-1 h-[55%] border rounded'>
            <div className="flex flex-col w-[35%] bg-white border-r min-w-[240px]">
              <div className='p-2 font-semibold flex justify-between items-center border-b shadow'>
                <div className='flex gap-2 items-center'>
                  <p className='text-xl ml-2'>Mails</p>
                  {/* <div className='flex items-center'>
                    <Checkbox size='small' className='p-0' />
                    <span className='text-xs text-gray-500'>Only show mail from friends</span>
                  </div> */}
                </div>
                <IoIosAddCircle
                  className='text-3xl text-app-primary cursor-pointer self-end'
                  onClick={handleNewMail}
                />
              </div>
              <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100">
                {
                  friendMails.length > 0 &&
                  friendMails
                    .map((mail) =>
                      <Mail
                        key={mail.id + mail.updated_at}
                        mail={mail}
                        userId={user.userId}
                        isSelected={mail.id === selectedMailId}
                        setSelectedMail={async (mail) => {
                          if (selectedMailId === mail.id)
                            return;
                          if (isEditting) {
                            await handleSave();
                            setIsEditting(false);
                          }
                          setSelectedMailId(mail.id);
                        }}
                      />)
                }
                <div className="ref h-[1px]" ref={ref} />
                {((mails.length === 0 && isFetching) || friendMails === 0 && isFetchingNextPage) &&
                  <div className='flex flex-col mt-10 justify-center items-center'>
                    <CircularProgress size={'36px'} />
                  </div>
                }
              </div>
            </div>
            <div className="flex flex-col w-[65%] min-w-[450px] p-6">
              <div className="flex items-start justify-between border-b pb-4">
                <div className="text-2xl font-semibold flex space-x-1 items-center w-[75%] ">
                  {(isSelectedMailArrived || isSelectedMailMine) ?
                    <>
                      <EditText
                        style={{ padding: '4px', margin: 0, width: '100%' }}
                        className='truncate'
                        value={selectedMail.subject}
                        readonly={!isEditting}
                        onChange={(e) => {
                          if (e.target.value.length > 20) {
                            return;
                          }
                          if (e.target.value.length == 0) {
                            e.target.value = ' ';
                          }
                          const newMails = mails.map(mail => {
                            if (mail.id === selectedMail.id) {
                              mail.subject = e.target.value.trim();
                            }
                            return mail;
                          })
                          setMails(newMails);
                        }}
                        onBlur={async () => {
                          if (!selectedMail.isNew) {
                            await handleSave()
                          }
                        }}
                      />
                      {
                        selectedMail.status == 'draft'
                          ? isEditting ?
                            <FaSave className='text-2xl cursor-pointer min-w-[25px]'
                              onClick={async () => {
                                await handleSave();
                                setIsEditting(false);
                              }}
                            /> :
                            <MdEdit className='text-2xl cursor-pointer' onClick={() => setIsEditting(true)} />
                          : null
                      }
                    </> :
                    selectedMail?.arrived_at && <><span className='mr-1'>再等</span><Countdown date={new Date(selectedMail?.arrived_at)} onComplete={forceUpdate} /></>
                  }
                </div>
                <div className="flex flex-col items-end">

                  <div className='mb-1'>
                    {selectedMail?.sender_username}
                  </div>
                  <div className="text-sm text-gray-500">
                    {(isSelectedMailArrived || isSelectedMailMine) && formatMailDate(selectedMail?.updated_at || selectedMail?.created_at)}
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-4 overflow-hidden" onBlur={async () => {
                if (isEditting && selectedMail?.status == 'draft' && selectedMail?.content.length > 0 && !selectedMail.isNew)
                  await handleSave();
              }}>
                <Quill
                  key={selectedMailId} userId={user.userId} setMails={setMails} selectedMail={selectedMail} handleSave={handleSave} isEditting={isEditting} setIsEditting={setIsEditting}
                />
              </div>
              <div className="mt-2">
                {/* <Editor /> */}
                {
                  selectedMail?.status === 'draft' &&
                  <div className="flex justify-end">
                    <button
                      key={selectedMailId + isSending}
                      className="flex justify-center items-center font-semibold text-xl bg-app-primary rounded-lg text-app-content px-3 py-3"
                      onClick={async () => await handleSend()}
                    >
                      Send
                      {isSending ?
                        <CircularProgress size={'20px'} sx={{ color: 'primary.contrastText' }} className='ml-1' /> :
                        <IoMdSend style={{ marginLeft: '5px' }} />}
                    </button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}