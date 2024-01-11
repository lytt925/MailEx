import React, { useState } from 'react'
import Input from './Input';
import { useUser } from '@/hooks/useUserContext';
import countryJson from '@/api/countries.json';
import { Button } from '@mui/material';
import api from '@/api';
import Snackbar from '@mui/material/Snackbar';

const ProfilePage = ({ userInfo }) => {
  const [currentUserInfo, setCurrentUserInfo] = useState(userInfo);
  const [message, setMessage] = useState('Save successfully!');
  const [alert, setAlert] = React.useState({
    alertOpen: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, alertOpen } = alert;
  const handleAlertClose = () => {
    setAlert({ ...alert, alertOpen: false });
  };

  const { token } = useUser();

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    setCurrentUserInfo({ ...currentUserInfo, [e.target.id]: e.target.value });
  }

  // console.log(currentUserInfo);
  const handleSave = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
    const { data } = await api.patch(`/user/profile`, currentUserInfo, { headers });
    if (data.message === 'success') {
      setAlert((prev) => { return { ...prev, alertOpen: true } });
    } else {
      setMessage('Save failed!');
      setAlert((prev) => { return { ...prev, alertOpen: true } });
    }
  }

  return (
    <section className="flex flex-col items-center justify-center w-full ">
      <div className="flex flex-col my-6 w-[910px]">
        {PositionedSnackbar({ message, alertOpen, handleAlertClose, vertical, horizontal })}
        <div className='w-full flex justify-start mb-5'>
          <p className='text-xl font-semibold'>User Profile</p>
        </div>
        <div className='w-full flex flex-col border shadow-md rounded h-full'>
          <p className='px-5 py-3 text-lg font-semibold border-b border-gray-300 w-full'>Basic Info</p>
          <div className='flex flex-col w-full p-5'>
            <div className='flex flex-row items-center px-5 py-2 gap-3'>
              <p className='text-lg font-semibold'>@{currentUserInfo.username}</p>
            </div>
            <div className='px-5 py-1 w-[90%]'>
              <div className='flex gap-5'>
                <Input handleChange={handleChange} labelText='Email' labelFor='email' id='email' name='email' type='text' value={currentUserInfo.email} />
                <Input handleChange={handleChange} labelText='Age' labelFor='age' id='age' name='age' type='number' value={currentUserInfo.age} />
                <Input handleChange={handleChange} labelText='Gender' labelFor='gender' id='gender' name='gender' type='select' value={currentUserInfo.gender}
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "others", label: "Others" },
                  ]} />
              </div>
              <div className='flex gap-5'>
                <Input
                  handleChange={handleChange} labelText='Country' labelFor='country_code' id='country_code' name='country' type='select' value={currentUserInfo.country_code}
                  options={countryJson.countries}
                />
              </div>
              <div>
                <Input handleChange={handleChange} labelText='One Line Bio' labelFor='profile_content' id='profile_content' name='profile_content' type='textarea' value={currentUserInfo.profile_content} maxLength={85} customClass={'h-12'} />
              </div>
              <Input handleChange={handleChange} labelText='Introduction Card' labelFor='card_content' id='card_content' name='card_content' type='textarea' value={currentUserInfo.card_content} max={800} customClass={'h-60'} />
            </div>
            <Button variant="contained" sx={{ width: '120px', margin: "0 auto" }} className='bg-app-primary' onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProfilePage


function PositionedSnackbar({ message, alertOpen, handleAlertClose, vertical, horizontal }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={4000}
      open={alertOpen}
      onClose={handleAlertClose}
      message={message}
      key={vertical + horizontal}
    />
  );
}
// { "id": 17, 
// "username": "hyw", 
// "email": "hyw@gmail.com", 
// "created_at": "2023-12-02T17:25:12.000Z", 
// "age": 23, 
// "country_code": "JP", 
// "gender": "female", 
// "profile_content": "Creative web developer blending technology and art, with a passion for teaching coding.", 
// "provider": "native", 
// "updated_at": "2023-12-11T12:27:20.000Z", 
// "card_content": "Greetings! I'm a professional web developer with a knack for creating sleek and user-friendly websites. My journey in the tech world started over a decade ago, and since then, I've honed my skills in various programming languages and design principles. I'm particularly interested in the intersection of technology and art, striving to blend aesthetics with functionality. In my free time, I mentor aspiring coders, sharing my knowledge and experiences. Let's connect and explore the limitless possibilities of the digital world together!", 
// "country_name": "Japan" }