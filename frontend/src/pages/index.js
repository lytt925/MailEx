import { Homepage } from '@/components/Homepage'
import topics from '@/api/topics.json';
import axios from 'axios';

export default function MainPage({ topics, users }) {
  return (
    <Homepage topics={topics} users={users} />
  )
}


const fetchUserCards = async (userId) => {
  const response = await axios.get('http://backend:4000/api/1.0/user/usercards', { userId });
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