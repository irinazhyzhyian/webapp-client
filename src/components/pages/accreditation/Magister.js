import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Certificate from "./Certificate";
import { getAccreditationMainDocs } from "../../../api/accreditationApi";
import useAxios from "../../hooks/useAxios";

const Magister = () => {
    const [masterCertificateApiDto, setMasterCertificateApiDto] = useState({level: 'master'});
    const { response, loading } = useAxios(masterCertificateApiDto, getAccreditationMainDocs);
    return (
        <Box py={3}>
            {
                loading ? <Box display="flex" justifyContent="center"><CircularProgress /></Box> :
                    <Certificate certificates={response?.data} level='master' />
            }
        </Box>
    );
};

export default Magister;