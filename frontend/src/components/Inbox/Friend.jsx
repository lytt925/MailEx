import Chip from '@mui/material/Chip';

export const Friend = ({ friend, handleClick, isSelected }) => {
    return (
        <div
            className={`flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer ${isSelected ? 'bg-gray-100' : ''}`}
            onClick={handleClick}>
            <div className='flex justify-between items-center w-full' >
                <div className="font-semibold text-xl">{friend.username}</div>
                <Chip
                    key={isSelected}
                    label={friend.country_name}
                    size="small"
                    sx={{ fontSize: '10px', fontWeight: "bold", backgroundColor: isSelected ? 'primary.light' : '' }}
                />
            </div>
        </div >
    )
}