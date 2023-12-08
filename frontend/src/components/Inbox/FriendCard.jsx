

export const FriendCard = ({ selectedFriend }) => {
    return (
        <div className="flex-1 h-15 px-6 py-4">
            <div className='text-2xl font-bold mb-2'>
                {selectedFriend?.username}
            </div>
            <p className="text-sm">{selectedFriend?.profile_content}</p>
        </div>
    )
}