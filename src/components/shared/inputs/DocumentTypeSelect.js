import React, { useEffect, useState } from "react";
import { getDocumenType } from "../../../api/filesApi";
import useAxios from "../../hooks/useAxios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DocumentTypeSelect = ({onSelect, selected = null}) => {
    const [options, setOptions] = useState([]);
    const [apiDto, setApiDto] = useState({});
    const { response, loading, error } = useAxios(apiDto, getDocumenType);


    useEffect(() => {
        if (response && response.data) {
            const newOptions = response.data.map(option => ({ ...option, value: option._id, label: option.name }));
            setOptions(newOptions);
        }
    }, [response]);

    const changeSelect = (event) => {
        onSelect(event.target.value);
    }

    return (
        <FormControl size="small">
            <InputLabel>Тип документу</InputLabel>
            <Select
                value={selected}
                label="Тип документу"
                onChange={changeSelect}
                sx={{minWidth: 190}}
            >
                {options.map(option => <MenuItem value={option.value}>{option.label}</MenuItem>)}
            </Select>
        </FormControl>

    );
};

export default DocumentTypeSelect;