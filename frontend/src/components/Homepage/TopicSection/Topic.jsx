import { useState } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { HiOutlineRefresh } from "react-icons/hi";
import TextArea from './TextArea';
import Paper from '@mui/material/Paper';


const Topic = ({ topics }) => {
    const [answer, setAnswer] = useState('');
    const [topic, setTopic] = useState(topics[0]);
    const handleChange = (e) => {
        setAnswer(e.target.value);
    }


    const refreshTopic = async () => {
        const res = await axios.get('/api/topic');
        const newTopic = res.data[0];
        console.log(newTopic);
        setTopic(newTopic);
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
                        className="mb-3 leading-[1.75em] resize-none outline-transparent w-full flex-1 notes bg-note-pattern line-custom placeholder:italic placeholder:pl-1"
                        onChange={handleChange}
                        value={answer}
                        placeholder='Send your answer to these questions!'
                    >
                    </textarea>
                    <button className="max-w-[100px] bg-app-primary hover:bg-app-primary-light text-white font-bold py-1 px-4 rounded">
                        Send
                    </button>
                </div>
            </Paper>
            {/* <TextArea answer={answer} setAnswer={setAnswer} className={"flex flex-col items-center w-[425px] p-5"} /> */}
        </>
    )
}

export default Topic