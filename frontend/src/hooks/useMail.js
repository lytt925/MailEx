import { useInfiniteQuery } from '@tanstack/react-query';
import axios from '../axios';

const fetchMails = async (paging) => {
  const actions = query ? 'search' : 'category'

  try {
    if (actions === 'category') {
      const { data } = await axios.get(`/mail`, { params: { paging } });
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export const useFeeds = () => {
  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    dataUpdatedAt
  } = useInfiniteQuery({
    queryKey: [category, query],
    queryFn: ({ pageParam }) => fetchProducts(query, category, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.next_paging ?? undefined,
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