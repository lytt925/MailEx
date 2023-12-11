import { Homepage } from '@/components/Homepage'
import topics from '@/api/topics.json';
import api from '@/api';

export default function MainPage({ topics, users }) {
  return (
    <Homepage topics={topics} users={users} />
  )
}


const fetchUserCards = async (userId) => {
  const response = await api.get('/user/usercards', { userId });
  return response.data;
}

export async function getServerSideProps({ req, res }) {
  const randomTopics = topics.sort(() => Math.random() - Math.random()).slice(0, 1);
  const { users } = await fetchUserCards();

  return {
    props: {
      topics: randomTopics,
      users: users
    },
  };
}