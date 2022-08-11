import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export default function Modal({ open, title, children, handleClose }) {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle sx={theme => ({color: theme.palette.secondary.main, fontWeight: 800})}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                {title}
                <IconButton onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
                </Box>
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <Box display="flex" justifyContent="center" flexDirection="column">
                {children}
                </Box>
            </DialogContent>
        </Dialog>
    );
}