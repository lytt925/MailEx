import { format } from 'date-fns'
import { bg } from 'date-fns/locale';


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

function extractTextFromHTML(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "";
}


export const Mail = ({ mail, isSelected, setSelectedMail, userId }) => {

    const handleClick = () => {
        setSelectedMail(mail);
    }

    let arrivedDate;
    if (mail.arrived_at) {
        arrivedDate = new Date(mail.arrived_at);
    }
    const arrived = mail.arrived_at && arrivedDate < new Date();
    const sending = mail.arrived_at && arrivedDate > new Date();


    let formattedDate;
    if (arrivedDate) {
        formattedDate = format(arrivedDate, 'yyyy/MM/dd');
    } else {
        const date = new Date(mail.updated_at || mail.created_at);
        // formattedDate = format(date, 'yyyy/MM/dd HH:mm');
        formattedDate = format(date, 'yyyy/MM/dd');
    }

    const isReceiverMe = (mail.receiver_id === userId)
    const isSenderMe = (mail.sender_id === userId)

    return (
        arrived || isSenderMe ?
            <div onClick={handleClick} className={`${isReceiverMe ? "" : ""} min-h-[120px] flex hover:bg-gray-100 border-y border-gray-100 ${isSelected ? 'bg-gray-100' : ''}`}>
                <div className={`w-1 min-w-4 ${isSelected ? 'bg-app-primary' : ''}`}></div>
                <div className="flex flex-col w-[95%] p-4 cursor-pointer max-w-[100%]">
                    <div className='flex items-start justify-between mb-1'>
                        <div className="text-sm text-app-content mb-1 font-medium">@{mail.sender_username}</div>
                        <div className="text-sm text-gray-400">{formattedDate}</div>
                    </div>
                    <div className='my-1 truncate'>
                        {mail.status === 'draft' && <p className='mr-1 inline text-gray-400 text-base'>[草稿]</p>}
                        <p className="inline truncate font-semibold text-lg">{mail.subject}</p>
                        {sending && <p className='ml-1 inline text-gray-400 text-base'>傳送中</p>}
                    </div>
                    <div className="truncate max-w-[85%] text-sm text-gray-600">{extractTextFromHTML(mail.content)}</div>
                </div>
            </div> :
            <div onClick={handleClick} className={`${isReceiverMe ? "" : ""} min-h-[120px] flex hover:bg-gray-100 border-y border-gray-100 ${isSelected ? 'bg-gray-100' : ''}`}>
                <div className={`w-1 min-w-4 ${isSelected ? 'bg-app-primary' : ''}`}></div>
                <div className="flex flex-col flex-grow p-4 cursor-pointer max-w-[97%]">
                    <div className='flex items-start justify-between mb-1'>
                        <div className="text-sm text-app-content mb-1 font-medium">@{mail.sender_username}</div>
                        <div className="text-sm text-gray-400">{formattedDate}</div>
                    </div>
                    <div className='my-1 truncate'>
                        <p className="inline truncate font-semibold text-lg">還在路上</p>
                    </div>
                    <div className="truncate max-w-[85%] text-sm text-gray-600">抵達時間: {format(new Date(mail.arrived_at), 'yyyy/MM/dd HH:mm')}</div>
                </div>
            </div>

    )
};