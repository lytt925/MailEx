import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from '../../../api';
import { useUser } from '../../../hooks/useUserContext';

const fetchFriendsList = async (token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  };
  const { data } = await axios.get(`/user/friends`, { headers });
  return data;
}

export const useFriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);
  const { user, token } = useUser();
  const { status, data, error } = useQuery({
    queryKey: ['friends', user.userId],
    queryFn: () => fetchFriendsList(token),
    enabled: !!user.userId && !!token,
  });

  useEffect(() => {
    if (status === 'success' && data) {
      setFriendsList(data.friends);
    }
  }, [data, status]);

  return { status, error, friendsList };
}