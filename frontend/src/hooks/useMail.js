import { useInfiniteQuery } from '@tanstack/react-query';
import axios from '../axios';

const fetchMails = async (paging) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    };
    const { data } = await axios.get(`/mail`, {
      params: { paging },
      headers: headers
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const useMails = (userId) => {
  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    dataUpdatedAt
  } = useInfiniteQuery({
    queryKey: ['mails', userId],
    queryFn: ({ pageParam }) => fetchMails(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.next_paging ?? undefined,
    enabled: !!userId,
  })


  return {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    dataUpdatedAt,
  }
}