import { format } from 'date-fns'


// {
//     "id": 8,
//     "sender_id": 3,
//     "receiver_id": 19,
//     "content": "最近我在整理舊照片，發現了我們高中時代的一些珍貴瞬間。這些回憶讓我感到無比的溫馨和感激。希望你近況良好。",
//     "status": "draft",
//     "created_at": "2023-12-02T19:12:09.000Z",
//     "sent_at": null,
//     "arrived_at": null,
//     "subject": "舊照片回憶",
//     "updated_at": "2023-12-02T19:12:09.000Z",
//     "sender_username": "lytt925",
//     "receiver_username": "mayyam23"
//   },


export const Mail = ({ mail, isSelected, setSelectedMail }) => {
    const date = new Date(mail.created_at);
    const formattedDate = format(date, 'yyyy/MM/dd');

    const handleClick = () => {
        setSelectedMail(mail);
    }

    return (
        <div onClick={handleClick} className={`flex hover:bg-gray-100 border-y border-gray-100 ${isSelected ? 'bg-gray-100' : ''}`}>
            <div className={`w-1 min-w-4 ${isSelected ? 'bg-app-primary' : ''}`}></div>
            <div className="flex flex-col flex-grow p-4 cursor-pointer max-w-[97%]">
                <div className='flex items-start justify-between mb-1'>
                    <div className="text-sm text-app-content mb-1 font-medium">@{mail.sender_username}</div>
                    <div className="text-sm text-gray-400">{formattedDate}</div>
                </div>
                <div className='my-1 truncate'>
                    <p className='mr-1 inline text-gray-400 text-base'>{(mail.status === 'draft' ? '[草稿] ' : '')}</p>
                    <p className="inline truncate font-semibold text-lg">{mail.subject}</p>
                </div>
                <div className="truncate max-w-[85%] text-sm text-gray-600">{mail.content}</div>
            </div>
        </div>
    )
};