import React from "react";
import { Typography } from "@mui/material";
import AbiturientsChart from "./AbiturientsChart";
import { Box } from "@mui/system";
import ToDoList from "./ToDoList";

const Home = () => {
    return(
        <Box display="flex">
            <Box flex={1}><ToDoList/></Box>
            <Box flex={1}><AbiturientsChart/></Box>
        </Box>
    );
}

export default Home;