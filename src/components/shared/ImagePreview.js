import React from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const ImagePreview = ({ onRemove, src, alt = "Фото", width = "100", height = "100" }) => {
    return (
        <Box display="flex" alignItems="start">
            <img src={src} alt={alt} width={width} height={height} />
            <IconButton onClick={onRemove}>
                <CloseIcon fontSize="small" color="error" />
            </IconButton>
        </Box>
    );
};

export default ImagePreview;