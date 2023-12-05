import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'react-quill/dist/quill.bubble.css'; // Import Quill styles
import styles from './quill.module.css';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export default function Quill() {
    const [content, setContent] = useState('');

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
    };
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

    const handleEditorChange = (newContent) => {
        setContent(newContent);
        console.log(newContent);
    };

    return (
        <div className="flex items-center flex-col h-full max-w-full">
            <QuillEditor
                placeholder={'Write something...'}
                value={content}
                onChange={handleEditorChange}
                modules={quillModules}
                formats={quillFormats}
                // readOnly={true}
                theme={"bubble"}
                className={`editorContainer scrollbar-thin scrollbar-thumb-gray-100 w-full max-w-full h-[80%] bg-white ${styles.editorContainer}`}
            />
        </div>
    );
}
