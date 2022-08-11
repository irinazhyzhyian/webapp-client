import React from "react";
import SinglePagePDFViewer from "../../shared/pdfViewer/SinglePagePDFViewer";
import { Box, Divider, Tooltip } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import radaFolder from "../../../assets/radaFacultetu.png";
import vchenaRadaFolder from "../../../assets/vchenaRada.png";
import kafedraFolder from "../../../assets/kafedra.png";
import { Link } from "react-router-dom";
import { URLS } from "../../routes/urls";


const Certificate = ({certificates, level}) => {
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" gap={2} flexWrap="wrap">
                <Box width="50%"><SinglePagePDFViewer pdf={certificates?.certificate?.document[0].document} /></Box>
                <Box>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>Рішення НАЗЯВО</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SinglePagePDFViewer pdf={certificates?.NAZIAVOresult?.document[0].document} />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>ЗВІТ про результати акредитаційної експертизи</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SinglePagePDFViewer pdf={certificates?.zvit?.document[0].document} />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>Самооцінка</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SinglePagePDFViewer pdf={certificates?.selfesteem?.document[0].document} />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>Експертний висновок ГЕР</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SinglePagePDFViewer pdf={certificates?.gerResult?.document[0].document} />
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
            <Box>
                <Box display="flex" justifyContent="center" py={3}>
                    <Typography color="secondary" variant="h6">Зміни до освітньої програми</Typography>
                </Box>
                <Divider sx={{ width: "100%" }} variant="middle" />
                <Box display="flex" justifyContent="center">
                    <Tooltip title="Кафедра" arrow>
                        <Link to={`${URLS.accreditationCathedraChanges}?level=${level}`}><img width={250} height={200} src={kafedraFolder} alt="kafedraFolder" /></Link>
                    </Tooltip>
                    <Tooltip title="Рада факультету" arrow>
                        <Link to={`${URLS.accreditationFacultyCouncilChanges}?level=${level}`}><img width={250} height={200} src={radaFolder} alt="radaFolder" /></Link>
                    </Tooltip>
                    <Tooltip title="Вчена рада" arrow>
                        <Link to={`${URLS.accreditationAcademicCouncilChanges}?level=${level}`}><img width={250} height={200} src={vchenaRadaFolder} alt="vchenaRadaFolder" /></Link>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
};

export default Certificate;