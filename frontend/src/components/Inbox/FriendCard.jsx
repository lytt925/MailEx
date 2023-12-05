

export const FriendCard = ({ user, selectedMail }) => {
    return (
        <div className="flex-1 h-15 px-1 py-1">
            <div className='text-2xl font-bold px-6 py-4'>
                {selectedMail.sender_username === user.username ? selectedMail.receiver_username : selectedMail.sender_username}
            </div>
        </div>
    )
}