import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'react-quill/dist/quill.bubble.css'; // Import Quill styles
import styles from './quill.module.css';
import Loader from '../Inbox/loader';
import { is } from 'date-fns/locale';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'align',
    'color',
];


const bindings = {

    tab: {
        key: 9,  // Tab key
        handler: function (range, context) {
            // Check if the current block is already indented
            const currentFormat = this.quill.getFormat(range);
            const currentIndent = currentFormat.indent || 0;
            // Increase indentation
            this.quill.format('indent', currentIndent + 1);
            return false; // Prevents the default behavior of the tab key
        }
    }
}


export default function Quill({ userId, mails, setMails, selectedMailId, handleSave, setIsSaved, isEditting, setIsEditting }) {
    const selectedMail = mails.find(mail => mail.id === selectedMailId);
    const [newContent, setNewContent] = useState(selectedMail?.content);
    const [timer, setTimer] = useState(null);

    let arrivedDate;
    if (selectedMail?.arrived_at) {
        arrivedDate = new Date(selectedMail.arrived_at);
    }
    const arrived = selectedMail?.arrived_at && arrivedDate < new Date();
    const isSenderMe = (selectedMail?.sender_id === userId)

    bindings.customSave = {
        key: 'S',
        shortKey: true,  // For both Ctrl and Command
        handler: (range, context) => {
            handleSave();
            setIsEditting(false)
            return false; // Prevents the default behavior
        }
    }

    const quillModules = {
        toolbar: [
            [{ 'header': 1 }, { 'header': 2 }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            [{ align: [] }],
            [{ color: [] }],
            ['clean'],
        ],
        // keyboard: {
        //     bindings: bindings
        // }
    };

    const handleEditorChange = (newContent) => {
        console.log(newContent)
        setNewContent(newContent);

        // find the selectedMail in mails
        const selectedMailIndex = mails.findIndex(mail => mail.id === selectedMailId);
        // update the content
        const newMails = [...mails];
        newMails[selectedMailIndex].content = newContent;
        setMails(newMails);

        // Clear the existing timer
        if (timer) {
            clearTimeout(timer);
        }

        // Set a new timer
        const newTimer = setTimeout(() => {
            if (isEditting) {
                handleSave(); // Call the save function after 3 seconds of inactivity
                setIsSaved(true);
            }
        }, 2500); // 2500 milliseconds = 3 seconds

        setTimer(newTimer);
    };

    // Clean up the timer on component unmount
    useEffect(() => {
        return () => {
            if (timer) {
                setIsSaved(false);
                clearTimeout(timer);
            }
        };
    }, [timer]);

    return (
        <div className="flex items-center flex-col h-full max-w-full">
            {arrived || isSenderMe ?
                <QuillEditor
                    key={isEditting}
                    placeholder={'Write something...'}
                    value={newContent}
                    onChange={handleEditorChange}
                    modules={quillModules}
                    formats={quillFormats}
                    readOnly={!isEditting}
                    theme={!isEditting ? "bubble" : "snow"}
                    className={`editorContainer scrollbar-thin scrollbar-thumb-gray-100 w-full max-w-full h-[95%] bg-white ${styles.editorContainer}`}
                /> :
                selectedMail?.arrived_at && <Loader />
            }
        </div>
    );
}
