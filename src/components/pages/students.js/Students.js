import React, { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, IconButton, Paper, Typography } from "@mui/material";
import useAxios from "../../hooks/useAxios";
import PageSpinner from "../../shared/PageSpinner";
import { deleteDocument, getDocumentByType } from "../../../api/filesApi";
import file from "../../../assets/file-img.png";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DocumentTypeSelect from "../../shared/inputs/DocumentTypeSelect";


const Students = () => {
    const [apiDto, setApiDto] = useState({type: '62700f9e1282a022c77db230'});
    const { response, loading, error } = useAxios(apiDto, getDocumentByType);




    return (
        <Box display="flex" justifyContent="center">
            <Paper sx={{ width: "95%", mt: 2 }}>
                <Card>
                    {loading && <PageSpinner />}
                    {error && <Box display="flex" justifyContent="center"><Typography>Виникла помилка</Typography></Box>}
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h5">Студенти</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                        <Button
                            sx={{ m: 3 }}
                            variant="contained"
                            color="secondary"
                            startIcon={<AddIcon />}
                        >
                            Додати документ
                        </Button>
                    </Box>
                    {response?.data?.length === 0 && <Box display="flex" justifyContent="center"><Typography>Дані відсутні</Typography></Box>}
                    {response?.data.map((group, index) => (
                        <>
                            <Typography sx={{ flexShrink: 0, color: 'text.secondary', fontWeight: 600 }}>
                                {group._id ? `${group._id} рік вступу (${new Date().getFullYear() - group._id} курс)` : ''}
                            </Typography>
                            <Box display="flex" flexWrap="wrap" gap={3}>
                                {group.docs.map(document => (
                                    <Box display="flex" flexDirection="column" alignItems="flex-end">
                                        <a href={`${process.env.REACT_APP_URL}/${document.document}`} rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
                                            <Box display="flex" flexDirection="column" alignItems="center" width="100px">
                                                <img src={file} alt="File" style={{ width: "50px" }} />
                                                <Typography color="secondary" variant="subtitle2">{document.name}</Typography>
                                            </Box>
                                        </a>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    ))}
                </Card>
            </Paper>
        </Box>
    );
}

export default Students;