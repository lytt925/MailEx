import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'react-quill/dist/quill.bubble.css'; // Import Quill styles
import styles from './quill.module.css';


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


export default function Quill({ userId, mail, handleSave, isEditting, setIsEditting }) {
    const [newContent, setNewContent] = useState(mail.content);
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
        keyboard: {
            bindings: bindings
        }
    };

    const handleEditorChange = (newContent) => {
        setNewContent(newContent);
        mail.content = newContent
    };

    return (
        <div className="flex items-center flex-col h-full max-w-full">
            {(new Date(mail.arrived_at) < new Date() || mail.sender_id == userId) ?
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
                <div>還沒到</div>
            }
        </div>
    );
}
