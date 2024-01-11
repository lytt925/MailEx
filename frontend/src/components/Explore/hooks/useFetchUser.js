import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/api'

const fetchUserCards = async (userId, paging) => {
  try {
    const response = await api.get('/user/usercards',
      { params: { userId, paging } });
    return response.data;
  } catch (error) {
    console.log(error);
    return []
  }
}

export const useUserCards = (userId) => {
  return useInfiniteQuery({
    queryKey: ['usercards'],
    queryFn: ({ pageParam }) => fetchUserCards(userId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.next_paging ?? undefined,
  })
}