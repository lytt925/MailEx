import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, Paper } from '@mui/material';
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GiFlowerPot } from "react-icons/gi";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { RxCross1 } from "react-icons/rx";
import { useUser } from '@/hooks/useUserContext';
import api from '@/api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 12,
    p: '32px',
};

async function addFriend(userId, friendId, token) {

    const newFriendMail = {
        sender_id: userId,
        receiver_id: friendId,
        subject: '你們已成為好友，開始寄信吧！',
        content: '',
        status: 'draft',
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };

    const { data } = await api.post(`/mail`, newFriendMail, { headers });
    console.log(data.message, newFriendMail.subject);
}


function UserCard({ userProfile }) {
    const router = useRouter();
    const { user, token } = useUser();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [message, setMessage] = useState('Add friend successfully! 🎉');

    const [alert, setAlert] = React.useState({
        alertOpen: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, alertOpen } = alert;

    const handleAddFriend = (newState) => () => {
        if (user.userId !== '') {
            setAlert({ ...newState, alertOpen: true });
            addFriend(user.userId, userProfile.id, token);
            handleClose();
        } else {
            setMessage('Please login first!');
            setAlert({ ...newState, alertOpen: true });
        }
    };

    const handleAlertClose = () => {
        setAlert({ ...alert, alertOpen: false });
    };

    const handleRouteToMailbox = () => {
        router.push('/mailbox');
    }

    const { id, age, gender, profile_content, username, country_name, card_content } = userProfile

    return (
        <Paper elevation={2} tabIndex={0} className='border-2 border-gray-500 relative h-[300px] w-[250px] bg-[#fffbf2] p-3 rounded-3xl'>
            {PositionedSnackbar({ message, alertOpen, handleAlertClose, vertical, horizontal, handleRouteToMailbox })}
            <div className='border-gray-500 border h-full rounded-2xl z-10 flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-xl font-semibold mx-4 mt-7'>{username}</h1>
                    <p className='text-base mx-4 my-4 border-y-2 border-gray-300 px-5 py-1 text-center'>{country_name}, {age}</p>
                    <p className='text-sm mx-7 my-2 italic z-20'>{profile_content}</p>
                </div>
                <IoIosArrowDown className='cursor-pointer absolute bottom-6 text-[24px]' onClick={() => handleOpen()} />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h5" component="h2">
                            About me
                            <RxCross1 className='text-base absolute top-5 right-5 cursor-pointer' onClick={handleClose} />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {card_content}
                        </Typography>
                        <div className='flex justify-center mt-6'>
                            <button
                                className='px-3 py-2 rounded my-0 mx-auto bg-app-primary font-medium'
                                onClick={handleAddFriend({ vertical: 'top', horizontal: 'center' })}
                            >
                                ADD AS A FRIEND
                            </button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </Paper>
    );
}



function PositionedSnackbar({ message, alertOpen, handleAlertClose, vertical, horizontal, handleRouteToMailbox }) {
    const action = (
        <React.Fragment>
            <Button color="primary" size="small" onClick={handleRouteToMailbox}>
                GO TO MAILBOX
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleAlertClose}
            >
                <RxCross1 className='text-base' />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={4000}
            open={alertOpen}
            onClose={handleAlertClose}
            message={message}
            key={vertical + horizontal}
            action={action}
        />
    );
}

export default UserCard