

export const FriendCard = ({ selectedFriend }) => {
    return (
        <div className="flex-1 max-h-32 px-6 py-4">
            <div className='text-2xl font-bold mb-2'>
                {selectedFriend?.username}
            </div>
            <p className="text-base pt-2">{selectedFriend?.profile_content}</p>
        </div>
    )
}