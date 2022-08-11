import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { updateEmployee } from "../../../api/employeesApi";
import useAxios from "../../hooks/useAxios";
import SnackbarUtils from "../../shared/SnackbarUtils";
import EmployeeForm from "../AddEmployee/EmployeeForm";
import Modal from "../Modal";

const UpdateEmployeeModal = ({ open, title, handleClose, refreshEmployees, employee }) => {
    const [apiDto, setApiDto] = useState(null);
    const { response } = useAxios(apiDto, updateEmployee);

    const onSave = (dto) => {
        setApiDto(dto);
        handleClose();
    }

    useEffect(() => {
        if (response) {
            if (response.status === 200) {
                SnackbarUtils.success("Дані користувача оновлено!");
                refreshEmployees();
            } else {
                SnackbarUtils.error("Щось пішло не так...");
            }
        }
    }, [response])

    return (
        <Modal
            open={open}
            title={title}
            handleClose={handleClose}
        >
            {!employee ? <CircularProgress /> :
                <EmployeeForm
                    employee={employee}
                    onSave={onSave}
                />
            }
        </Modal>
    );
}

export default UpdateEmployeeModal;