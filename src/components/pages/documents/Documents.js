import React, { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, IconButton, Paper, Typography } from "@mui/material";
import useAxios from "../../hooks/useAxios";
import PageSpinner from "../../shared/PageSpinner";
import { DOCUMENTS_TYPES } from "../../../constants/DucumentsTypes";
import { deleteDocument, getDocumentByType } from "../../../api/filesApi";
import file from "../../../assets/file-img.png";
import AddIcon from '@mui/icons-material/Add';
import { useToggle } from "react-use";
import AddDocument from "../../modals/AddDocument/AddDocument";
import CloseIcon from '@mui/icons-material/Close';
import WarningDialog from "../../modals/WarningDialog/WarningDialog";
import DocumentTypeSelect from "../../shared/inputs/DocumentTypeSelect";


const Documents = () => {
    const [apiDto, setApiDto] = useState(null);
    const { response, loading, error } = useAxios(apiDto, getDocumentByType);
    const [isModalOpen, toggleModalOpen] = useToggle(false);
    const [isDeleteModalOpen, toggleDeleteModalOpen] = useToggle(false);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [selectedDocId, setSelectedDocId] = useState(null);
    const [documentTypeFilter, setDocumentTypeFilter] = useState(null);
    useAxios(selectedDocId, deleteDocument);


    useEffect(() => {
        setApiDto({ type: documentTypeFilter });
    }, [documentTypeFilter]);

    const refresh = () => {
        setApiDto({ type: documentTypeFilter });
    };

    const handleDelete = () => {
        setSelectedDocId({ id: selectedDoc._id });
        refresh();
        toggleDeleteModalOpen();
    }

    return (
        <>
            <Box display="flex" justifyContent="center">
                <Paper sx={{ width: "95%", mt: 2 }}>
                    <Card>
                        {loading && <PageSpinner />}
                        {error && <Box display="flex" justifyContent="center"><Typography>Виникла помилка</Typography></Box>}
                        <Box display="flex" justifyContent="center">
                            <Typography variant="h5">Документація</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                            <DocumentTypeSelect selected={documentTypeFilter} onSelect={setDocumentTypeFilter} />
                            <Button
                                sx={{ m: 3 }}
                                variant="contained"
                                color="secondary"
                                startIcon={<AddIcon />}
                                onClick={toggleModalOpen}
                            >
                                Додати документ
                            </Button>
                        </Box>
                        {response?.data?.length === 0 && <Box display="flex" justifyContent="center"><Typography>Дані відсутні</Typography></Box>}
                        {response?.data.map((group, index) => (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography sx={{ flexShrink: 0, color: 'text.secondary', fontWeight: 600 }}>
                                        {group._id ? group._id : "Рік не визначено"}
                                    </Typography>
                                    <Typography sx={{ marginLeft: 3 }}>
                                        ({group.count})
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box display="flex" flexWrap="wrap" gap={3}>
                                        {group.docs.map(document => (
                                            <Box display="flex" flexDirection="column" alignItems="flex-end">
                                                <IconButton onClick={() => { toggleDeleteModalOpen(); setSelectedDoc(document); }}>
                                                    <CloseIcon fontSize="small" color="error" />
                                                </IconButton>
                                                <a href={`${process.env.REACT_APP_URL}/${document.document}`} rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
                                                    <Box display="flex" flexDirection="column" alignItems="center" width="100px">
                                                        <img src={file} alt="File" style={{ width: "50px" }} />
                                                        <Typography color="secondary" variant="subtitle2">{document.name}</Typography>
                                                    </Box>
                                                </a>
                                            </Box>
                                        ))}
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Card>
                </Paper>
            </Box>
            <AddDocument
                open={isModalOpen}
                handleClose={toggleModalOpen}
                refresh={refresh}
                fileType={DOCUMENTS_TYPES.document}
            />
            <WarningDialog
                open={isDeleteModalOpen}
                handleClose={toggleDeleteModalOpen}
                handleConfirm={handleDelete}
                title="Видалити документ"
                text={`Ви впевнені, що бажаєте документ ${selectedDoc?.name}?`}
            />
        </>
    );
}

export default Documents;