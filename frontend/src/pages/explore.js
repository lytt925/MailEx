import { Explore } from '@/components/Explore'
import api from '@/api/serverSideApi';

export default function ExplorePage({ userId, users }) {
  return (
    <Explore userId={userId} users={users} />
  )
}

const fetchUserCards = async (userId) => {
  try {
    const response = await api.get('/user/usercards', { params: { userId } });
    return response.data;
  } catch (error) {
    console.log(error);
    return []
  }
}

export async function getServerSideProps({ req, res }) {
  const userId = req.cookies.userId;
  const { users } = await fetchUserCards(userId);

  return {
    props: {
      users: users,
      userId: userId
    },
  };
}