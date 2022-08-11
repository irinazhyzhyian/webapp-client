import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getChangesToAccreditation } from "../../../api/accreditationApi";
import useAxios from "../../hooks/useAxios";
import ChangesToAccreditation from "./ChangesToAccreditation";


const AcademicCouncilChanges = ( ) => {
    const location = useLocation()
    const query = new URLSearchParams(location.search);
    const level = query.get('level');
    const [apiDto, setApiDto] = useState({ level: level, type: 'academicCouncilChanges' });

  const { response, loading } = useAxios(apiDto, getChangesToAccreditation);

  return (
    <>
      {loading && <Box display="flex" justifyContent="center" width="100%"><CircularProgress/></Box>}
      <ChangesToAccreditation files={response ? response.data : []} />
    </>
  );
};

export default AcademicCouncilChanges;