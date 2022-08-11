import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { addDocumnet } from "../../../api/filesApi";
import useAxios from "../../hooks/useAxios";
import SnackbarUtils from "../../shared/SnackbarUtils";
import Modal from "../Modal";
import fileImg from "../../../assets/file-img.png";
import ImagePreview from "../../shared/ImagePreview";
import DocumentTypeSelect from "../../shared/inputs/DocumentTypeSelect";


const AddDocument = ({ open, handleClose, refresh, fileType, isDescription }) => {
    const [apiDto, setApiDto] = useState(null);
    const { response } = useAxios(apiDto, addDocumnet);
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [documentTypeFilter, setDocumentTypeFilter] = useState(null);

    useEffect(() => {
        if (response) {
            if (response.status === 200) {
                SnackbarUtils.success("Документ успішно доданий!");
                refresh();
            } else {
                SnackbarUtils.error("Щось пішло не так...");
            }
        }
    }, [response]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    };

    const handleSave = () => {
        let dto = {
            name: name,
            year: year,
            document: file,
            type: documentTypeFilter
        }
        setApiDto(dto);
        setFile(null);
        setName("");
        setYear("");
        handleClose();
    }

    return (
        <Modal
            open={open}
            title="Завантажити документ"
            handleClose={handleClose}
        >
            <form>

                <Box display="flex" flexWrap="wrap" justifyContent="space-evenly" gap={4}>
                    <TextField
                        value={name}
                        variant="outlined"
                        label="Ім'я файлу"
                        onChange={(e) => setName(e.target.value)}
                        size="small"
                    />
                    <TextField
                        value={year}
                        variant="outlined"
                        label="Pік"
                        type="number"
                        onChange={(e) => setYear(e.target.value)}
                        size="small"
                    />
                    <DocumentTypeSelect selected={documentTypeFilter} onSelect={setDocumentTypeFilter} />
                    {isDescription &&
                        <TextField
                            fullWidth
                            value={description}
                            variant="outlined"
                            label="Короткий опис"
                            multiline
                            rows={4}
                            sx={{ ml: 4.5, mr: 4.5 }}
                            onChange={(e) => setDescription(e.target.value)}
                        />}

                    <input
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="raised-button-file">
                        <Button component="span">
                            Завантажити файл
                        </Button>
                    </label>
                    {file && <ImagePreview src={fileImg} width="70" alt="File" onRemove={() => setFile(null)} />}
                </Box>

                <Box>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={handleSave}
                        disabled={file === null}
                    >
                        Зберегти
                    </Button>
                </Box>
            </form>
        </Modal>
    );
}

export default AddDocument;