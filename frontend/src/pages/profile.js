// Import the unwrapped Inbox component
import { Profile } from '@/components/Profile';
import withAuth from '@/lib/withAuth';
import api from '@/api/serverSideApi'

// Wrap the component
const AuthenticatedProfilePage = withAuth(Profile);

function ProfilePage({ userInfo }) {
  return (
    <AuthenticatedProfilePage userInfo={userInfo} />
  );
}

const fetchUserInfo = async (userId) => {
  try {
    const response = await api.get('/user/profile', { params: { userId } });
    return response.data;
  } catch (error) {
    console.log(error);
    return {}
  }
}

export async function getServerSideProps({ req, res }) {
  const userId = req.cookies.userId || 3;
  const { user: userInfo } = await fetchUserInfo(userId);
  return {
    props: {
      userInfo
    },
  };
}

export default ProfilePage;
