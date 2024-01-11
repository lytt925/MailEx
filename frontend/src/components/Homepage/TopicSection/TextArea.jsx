import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';


export default function TextArea({ className, answer, setAnswer }) {

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }


    return (
        <Card className={className}>
            <textarea
                className="leading-[1.75em] resize-none outline-transparent w-full flex-1 notes bg-note-pattern line-custom placeholder:italic placeholder:pl-2"
                onChange={handleChange}
                value={answer}
                placeholder='Send your answer to these questions!'
            >
            </textarea>
            <button className="max-w-[100px] bg-app-primary hover:bg-app-primary-light text-white font-bold py-2 px-4 rounded">
                Send
            </button>
        </Card>
    );
}
