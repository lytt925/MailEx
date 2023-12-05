
export const Friend = ({ friend }) => {
    return (
        <div className="flex items-center p-6 hover:bg-gray-200 cursor-pointer">
            <div>
                <div className="font-semibold text-xl">{friend.username}</div>
            </div>
        </div>
    )
}