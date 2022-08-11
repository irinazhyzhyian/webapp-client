import { Avatar, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useToggle } from "react-use";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningDialog from "../../modals/WarningDialog/WarningDialog";
import { addNotes, deleteNotes, getNotes } from "../../../api/notesApi";
import useAxios from "../../hooks/useAxios";
import dayjs from "dayjs";


const ToDoList = () => {
    const [newPlan, setNewPlan] = useState('');
    const [isAddPlan, toggleIsAddPlan] = useToggle(false);
    const [isDeleteModalOpen, toggleDeleteModalOpen] = useToggle(false);
    const [noteToDelete, setNoteToDelete] = useState(null);
    const [notesApiDto, setNotesApiDto] = useState({});
    const { response } = useAxios(notesApiDto, getNotes);
    const [addNoteDto, setAddNoteDto] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    useAxios(addNoteDto, addNotes, refreshNotes);
    useAxios(deleteId, deleteNotes, refreshNotes);

    function refreshNotes() {
        toggleIsAddPlan(false);
        setNotesApiDto({});
        setNoteToDelete(null);
    }

    const addPlan = () => {
        if (newPlan === '') {
            toggleIsAddPlan();
            return;
        }
        const dto = {
            note: newPlan,
            date: dayjs().format("YYYY-MM-DD HH:mm:ss")
        };
        setAddNoteDto(dto);
    };

    const removePlane = (plan) => {
        setNoteToDelete(plan);
        toggleDeleteModalOpen();
    }

    const handleDelete = () => {
        setDeleteId(noteToDelete);
        toggleDeleteModalOpen();
    }

    return (
        <>
            <Box>
                <Typography variant="h6" color="secondary" m={2}>Заплановані події</Typography>
                <List sx={{ width: '100%', maxWidth: 360 }}>
                    {response?.plans?.map((plan, index) => (
                        <ListItem key={plan._id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => removePlane(plan)}>
                                    <DeleteIcon />
                                </IconButton>
                            }>
                            <ListItemAvatar>
                                <Avatar>
                                    <LabelImportantIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={plan.note} secondary={plan.date} />
                        </ListItem>
                    ))}
                </List>
                {isAddPlan ?
                    <Box display="flex" justifyContent="left">
                        <TextField
                            value={newPlan}
                            onChange={event => setNewPlan(event.target.value)}
                            multiline
                            size="small"
                        />
                        <Button startIcon={<AddIcon />} sx={{ ml: 1 }} variant="contained" onClick={addPlan}>
                            Додати
                        </Button>
                    </Box> :
                    <Button variant="contained" onClick={toggleIsAddPlan}>
                        Додати нову подію
                    </Button>
                }
            </Box>
            <WarningDialog
                open={isDeleteModalOpen}
                handleClose={toggleDeleteModalOpen}
                handleConfirm={handleDelete}
                title="Підтвердити видалення"
                text={`Видалити ${noteToDelete?.note}?`}
            />
        </>
    );
}

export default ToDoList;