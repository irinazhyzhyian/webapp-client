import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Certificate from "./Certificate";
import { getAccreditationMainDocs } from "../../../api/accreditationApi";
import useAxios from "../../hooks/useAxios";

const Bachelor = ({}) => {
    const [apiDto, setApiDto] = useState({level: 'bachelor'});
    const { response, loading } = useAxios(apiDto, getAccreditationMainDocs);
    return (
        <Box py={3}>
            {
                loading ? <Box display="flex" justifyContent="center"><CircularProgress /></Box> :
                    <Certificate certificates={response?.data} level='bachelor' />
            }
        </Box>
    );
};

export default Bachelor;