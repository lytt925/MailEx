import { useInfiniteQuery } from '@tanstack/react-query';
import axios from '../api';

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
  } = useInfiniteQuery({
    queryKey: ['mails', userId],
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
    isRefetching
  }
}