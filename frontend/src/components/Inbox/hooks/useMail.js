import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '../../../api';

const fetchMails = async (token, paging) => {
  if (!token) return console.log('No token');
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };
    const { data } = await axios.get(`/mail`, {
      params: { paging },
      headers: headers
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const useMails = (userId, token) => {
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
    fetchStatus,
  } = useInfiniteQuery({
    queryKey: ['mails'],
    queryFn: ({ pageParam }) => fetchMails(token, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.next_paging ?? undefined,
    enabled: !!userId && !!token,
  })


  return {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    dataUpdatedAt,
    refetch,
    isRefetching,
    fetchStatus
  }
}


const saveMail = async (mail, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  };

  let mailId = mail?.id
  if (mail.id !== -1) {
    const { data } = await axios.patch(`/mail/${mail.id}`, {
      senderId: mail.sender_id,
      newSubject: mail.subject,
      newContent: mail.content,
    }, { headers });
    console.log(data.message, mail.subject);
  } else {
    const { data } = await axios.post(`/mail`, {
      sender_id: mail.sender_id,
      receiver_id: mail.receiver_id,
      subject: mail.subject,
      content: mail.content,
      status: mail.status,
    }, { headers });
    console.log(data.message, mail.subject);
    mailId = data.mailId
  }
  return mailId;
}

export const useSaveMail = (token) => {
  const queryClient = useQueryClient()
  return useMutation(
    {
      mutationFn: async ({ mail }) => { return saveMail(mail, token) },
      onSuccess: () => {
        setTimeout(() => {
          queryClient.invalidateQueries(['mails']);
        }, 200); // Adjust the delay as needed
      }
    }
  )
}


const sendMail = async (changedMail, token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  };

  try {
    if (changedMail.id !== -1) {
      const { data } = await axios.patch(`/mail/${changedMail.id}`, {
        senderId: changedMail.sender_id,
        newSubject: changedMail.subject,
        newContent: changedMail.content,
        newStatus: changedMail.status,
        newSentAt: changedMail.sent_at,
        newArrivedAt: changedMail.arrived_at,
      }, { headers });
      console.log(data.message, changedMail.subject);
    } else {
      const { data } = await axios.post(`/mail`, {
        sender_id: changedMail.sender_id,
        receiver_id: changedMail.receiver_id,
        subject: changedMail.subject,
        content: changedMail.content,
        status: changedMail.status,
        sent_at: changedMail.sent_at,
        arrived_at: changedMail.arrived_at,
      }, { headers });
      console.log(data.message, changedMail.subject);
    }
  } catch (e) {
    console.log(e)
  }
}


export const useSendMail = (token) => {
  const queryClient = useQueryClient()
  return useMutation(
    {
      mutationFn: async ({ mail }) => { sendMail(mail, token) },
      onMutate: () => { },
      onSuccess: () => {
        setTimeout(() => {
          queryClient.invalidateQueries(['mails']);
        }, 500); // Adjust the delay as needed
        console.log('onSuccess')
      }
    }
  )
}