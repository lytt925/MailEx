import React, { useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { HiOutlineRefresh } from "react-icons/hi";
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import { RxCross1 } from "react-icons/rx";
import Chip from '@mui/material/Chip';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useUser } from '@/hooks/useUserContext';
import api from '@/api/index';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 12,
    p: '32px',
};

const getRandomUser = (users) => {
    const randomIndex = Math.floor(Math.random() * users.length);
    return (users[randomIndex]);
}

const Topic = ({ topics, users }) => {
    const [answer, setAnswer] = useState('');
    const [topic, setTopic] = useState(topics[0]);
    const [randomUser, setRandomUser] = useState(getRandomUser(users));
    const { user, token } = useUser();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const handleChange = (e) => {
        setAnswer(e.target.value);
    }


    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlertOpen(false);
    };

    const refreshTopic = async () => {
        const res = await axios.get('/api/topic');
        const newTopic = res.data[0];
        // console.log(newTopic);
        setTopic(newTopic);
    }

    const handleSend = ({ status }) => async () => {
        const newMail = {
            sender_id: user.id,
            receiver_id: randomUser.id,
            subject: 'Daily Topic',
            content: `<h2>${topic}</h2>` + "<br>" + answer,
            status: status
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        const { data } = await api.post(`/mail`, newMail, { headers });
        console.log(data);
        if (data.message === 'success') {
            setAlertOpen(true);
            handleClose();
        }
        const newRandomUser = getRandomUser(users);
        setRandomUser(newRandomUser);
    }




    return (
        <>
            <Paper elevation={2} sx={{ width: '100%', display: 'flex' }}>
                <CardContent className='min-w-[390px]'>
                    <div className='mb-3 border-b-2 flex items-center'>
                        <h2 className='px-2 pb-3 pt-2 font-semibold'>
                            Daily Topics
                        </h2>
                        <HiOutlineRefresh className="cursor-pointer" onClick={refreshTopic} />
                    </div>
                    <div className='p-2 space-y-4'>
                        <Typography className="block" variant="body" color="text.secondary">
                            {topic}
                        </Typography>
                    </div>
                </CardContent>
                <div className={"flex flex-col items-center min-w-[425px] p-5"}>
                    <textarea
                        className="bg h-60 text-base pr-3 mb-3 leading-custom resize-none outline-transparent w-full flex-1 notes bg-note-pattern line-custom placeholder:italic placeholder:pl-1"
                        value={answer}
                        onChange={handleChange}
                        placeholder='Send your answer to a random user!'
                    >
                    </textarea>
                    <button onClick={handleOpen} className="max-w-[100px] bg-app-primary hover:bg-app-primary-light text-white font-bold py-1 px-4 rounded">
                        Send
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h5" component="h2">
                                To:
                                <RxCross1 className='text-base absolute top-5 right-5 cursor-pointer' onClick={handleClose} />
                            </Typography>
                            <div className='mt-4 mx-1 h-24'>
                                <div className='flex gap-2 pl-2'>
                                    <p className='text-lg font-semibold'>{randomUser.username}</p>
                                    <Chip
                                        label={randomUser.country_name}
                                        size="small"
                                        sx={{ fontSize: '12px', fontWeight: "bold", backgroundColor: 'primary.main' }}
                                    />
                                </div>
                                <div className='flex text-sm items-center mt-1 h-max pl-2 border-l-2 border-black'>{randomUser.profile_content}</div>
                            </div>
                            <textarea
                                className="bg h-48 text-base pr-3 mb-3 leading-custom resize-none outline-transparent w-full flex-1 notes bg-note-pattern line-custom placeholder:italic placeholder:pl-1"
                                onChange={handleChange}
                                value={answer}
                                placeholder='Send your answer to a random user!'
                            >
                            </textarea>
                            <div className='flex justify-center mt-6'>
                                <button
                                    className='px-3 py-1 rounded my-0 mx-auto bg-app-primary font-medium'
                                    onClick={handleSend({ status: 'send' })}
                                >
                                    SEND
                                </button>
                                <button
                                    className='px-3 py-1 rounded my-0 mx-auto bg-app-primary'
                                    onClick={handleSend({ status: 'draft' })}
                                >
                                    SAVE AS DRAFT
                                </button>
                            </div>
                        </Box>
                    </Modal>
                </div>
                <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                    <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            </Paper>
            {/* <TextArea answer={answer} setAnswer={setAnswer} className={"flex flex-col items-center w-[425px] p-5"} /> */}
        </>
    )
}

export default Topic