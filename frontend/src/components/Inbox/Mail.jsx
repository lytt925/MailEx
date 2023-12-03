

export const Mail = ({ mail, selectedMail, setSelectedMail }) => {
    return (
        <div className="flex items-stretch hover:bg-gray-100">
            <div className="w-2"></div>
            <div className="flex flex-grow items-center p-6  cursor-pointer">
                <div className="flex-grow">
                    <div className="font-semibold text-xl">Alice Cooper</div>
                    <div className="text-sm text-gray-600">Meeting Reminder</div>
                </div>
                <div className="text-lg text-app-dark-brown">10:30 AM</div>
            </div>
        </div>
    )
};