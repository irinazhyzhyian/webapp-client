import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Modal from "../Modal";

const WarningDialog = ({ open, title, handleClose, handleConfirm, text }) => {
    return (
        <Modal
            open={open}
            title={title}
            handleClose={handleClose}
        >
            <Box display="flex" justifyContent="space-between" width="100%">
                <Typography>{text}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Button
                    variant="contained"
                    onClick={handleClose}
                    color="secondary"
                >
                    Відхилити
                </Button>
                <Button
                    variant="contained"
                    onClick={handleConfirm}
                    color="primary"
                >
                    Підтвердити
                </Button>
            </Box>
        </Modal>
    );
};

export default WarningDialog;