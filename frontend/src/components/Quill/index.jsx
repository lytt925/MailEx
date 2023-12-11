import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'react-quill/dist/quill.bubble.css'; // Import Quill styles
import styles from './quill.module.css';
import Loader from '../Inbox/loader';

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


export default function Quill({ userId, setMails, selectedMail, handleSave, isEditting, setIsEditting }) {
    const [newContent, setNewContent] = useState(selectedMail?.content);

    let arrivedDate;
    if (selectedMail?.arrived_at) {
        arrivedDate = new Date(selectedMail.arrived_at);
    }
    const arrived = selectedMail?.arrived_at && arrivedDate < new Date();
    const isSenderMe = (selectedMail?.sender_id === userId)

    if (newContent !== selectedMail?.content) {
        setNewContent(selectedMail?.content)
    }

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
        setNewContent(newContent);
        setMails(prev => {
            const index = prev.findIndex(mail => mail.id === selectedMail.id)
            prev[index].content = newContent
            return [...prev]
        })
    };

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
