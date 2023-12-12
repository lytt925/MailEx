import { Homepage } from '@/components/Homepage'
import topics from '@/api/topics.json';
import api from '@/api/serverSideApi';

export default function MainPage({ topics, users }) {
  return (
    <Homepage topics={topics} users={users} />
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
  const randomTopics = topics.sort(() => Math.random() - Math.random()).slice(0, 1);
  // const cookies = req.headers.cookie;
  // console.log("cookies", cookies);
  const userId = req.cookies.userId;
  const { users } = await fetchUserCards(userId);

  return {
    props: {
      topics: randomTopics,
      users: users
    },
  };
}