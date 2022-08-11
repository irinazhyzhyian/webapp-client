import React from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const PageSpinner = () => (
    <Box display="flex" justifyContent="center" sx={{ width: '100%', mt: 4 }}><CircularProgress /></Box>
);

export default PageSpinner;