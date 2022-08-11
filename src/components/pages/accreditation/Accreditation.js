import React, { useState } from "react";
import { TABS } from "../../../constants/accreditationTabs";
import CenteredTabs from "../../shared/CenteredTabs";
import Bachelor from "./Bachelor";
import { Box } from "@mui/material";
import Magister from "./Magister";



const Accreditation = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return(
        <Box>
            <CenteredTabs tabs={TABS} setTab={setCurrentTab}/>
            {currentTab === 0 ? <Bachelor/> : <Magister/>}
        </Box>
    );

};

export default Accreditation;