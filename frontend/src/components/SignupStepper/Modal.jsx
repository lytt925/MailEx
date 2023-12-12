import { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: '32px',
};

const InputModal = ({ open, handleClose, handleOpen }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

            sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' } }}
        >
            <Box sx={style}>

            </Box>
        </Modal>
    )
}

export default InputModal