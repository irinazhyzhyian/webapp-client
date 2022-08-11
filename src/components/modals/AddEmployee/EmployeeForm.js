import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Fieldset from "../../shared/Fieldset";
import ImagePreview from "../../shared/ImagePreview";

const EmployeeForm = ({onSave, employee}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [secondName, setSecondName] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirtday] = useState('');
    const [photo, setPhoto] = useState({ preview: '', data: '' });

    useEffect(() => {
        if(employee) {
            let birthday = "";
            if(employee.birthday) {
                birthday = dayjs(employee.birthday).format("YYYY-MM-DD");
            }
            setName(employee.name);
            setSurname(employee.surname);
            setSecondName(employee.secondName);
            setPosition(employee.position);
            setEmail(employee.email);
            setBirtday(birthday);
            setPhoto({ preview: `${process.env.REACT_APP_URL}/${employee.photo}` , data: employee.photo })
        }
        
    }, [employee]);

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setPhoto(img)
    };

    const handleSave = () => {
        let dto = {
            name: name,
            secondName: secondName,
            surname: surname,
            birthday: birthday,
            position: position,
            //email: email,
            photo: photo.data
        }
        if(employee) dto = {...dto, id: employee._id};
        onSave(dto);
    }


    return(
        <form>
                <Fieldset
                    legend="Персональні дані:"
                    sx={{ marginBottom: "20px" }}
                >
                    <Box display="flex" flexWrap="wrap" justifyContent="space-evenly" gap={4}>
                        <TextField
                            value={name}
                            variant="outlined"
                            label="Ім'я"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            value={secondName}
                            variant="outlined"
                            label="По-бaтькові"
                            onChange={(e) => setSecondName(e.target.value)}
                        />
                        <TextField
                            value={surname}
                            variant="outlined"
                            label="Прізвище"
                            onChange={(e) => setSurname(e.target.value)}
                        />
                        <TextField
                            value={birthday}
                            variant="outlined"
                            label="Дата народження"
                            type="date"
                            onChange={(e) => setBirtday(e.target.value)}
                        />
                    </Box>
                </Fieldset>
                <Fieldset
                    legend="Додаткова інформація:"
                    sx={{ marginBottom: "20px" }}
                >
                    <Box display="flex" flexWrap="wrap" justifyContent="space-evenly" gap={4}>
                        <TextField
                            value={position}
                            variant="outlined"
                            label="Позиція"
                            onChange={(e) => setPosition(e.target.value)}
                        />
                        <TextField
                            value={email}
                            variant="outlined"
                            label="Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="raised-button-file">
                            <Button component="span" color="secondary">
                                Завантажити фото
                            </Button>
                        </label>
                        {photo.preview &&
                            <ImagePreview
                                src={photo.preview}
                                onRemove={() => setPhoto({ preview: '', data: '' })}
                            />
                        }
                    </Box>
                </Fieldset>
                <Box>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={handleSave}
                    >
                        Зберегти
                    </Button>
                </Box>
            </form>
    );
};

export default EmployeeForm;