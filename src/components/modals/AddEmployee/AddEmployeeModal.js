import React, { useEffect, useState } from "react";
import { addEmployee } from "../../../api/employeesApi";
import useAxios from "../../hooks/useAxios";
import SnackbarUtils from "../../shared/SnackbarUtils";
import Modal from "../Modal";
import EmployeeForm from "./EmployeeForm";

const AddEmployeeModal = ({ open, title, handleClose, refreshEmployees }) => {
    const [apiDto, setApiDto] = useState(null);
    const { response } = useAxios(apiDto, addEmployee);

    const onSave = (dto) => {
        setApiDto(dto);
        handleClose();
    }

    useEffect(() => {
        if (response) {
            if (response.status === 200) {
                SnackbarUtils.success("Користувач успішно доданий!");
                refreshEmployees();
            } else {
                SnackbarUtils.error("Щось пішло не так...");
            }
        }
    }, [response]);

    return (
        <Modal
            open={open}
            title={title}
            handleClose={handleClose}
        >
            <EmployeeForm
                onSave={onSave}
            />
            
        </Modal>
    );
}

export default AddEmployeeModal;