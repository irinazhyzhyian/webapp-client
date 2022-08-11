import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from "@mui/system";
import useAxios from "../../hooks/useAxios";
import { deleteEmployee, getEmployees } from "../../../api/employeesApi";
import AddIcon from '@mui/icons-material/Add';
import { useToggle } from 'react-use';
import AddEmployeeModal from "../../modals/AddEmployee/AddEmployeeModal";
import WarningDialog from "../../modals/WarningDialog/WarningDialog";
import UpdateEmployeeModal from "../../modals/UpdateEmployee/UpdateEmployee";
import PageSpinner from "../../shared/PageSpinner";
import dayjs from "dayjs";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [apiDto, setApiDto] = useState(null);
  const { response, loading } = useAxios(apiDto, getEmployees);
  const [isModalOpen, toggleModalOpen] = useToggle(false);
  const [isUpdateModalOpen, toggleUpdateModalOpen] = useToggle(false);
  const [isDeleteModalOpen, toggleDeleteModalOpen] = useToggle(false);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [updatedEmployee, setUpfatedEmployee] = useState(null);
  const deleteEmployeeResponse = useAxios(deleteEmployeeId, deleteEmployee);

  useEffect(() => {
    setApiDto({});
  }, []);

  useEffect(() => {
    if (response)
      setEmployees(response.data)
  }, [response]);

  useEffect(() => {
    if(deleteEmployeeResponse.response) {
      refreshEmployees();
    }
  }, [deleteEmployeeResponse.response]);

  const refreshEmployees = () => {
    setApiDto({});
  };

  const handleDelete = () => {
    setDeleteEmployeeId({ id: selectedEmployee._id });
    toggleDeleteModalOpen();
  }

  return (
    <>
      <Box display="flex" justifyContent="space-around" margin={5}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={toggleModalOpen}
        >
          Додати нового працівника
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={3} padding={2}>
        {loading && <PageSpinner />}
        {employees.map(employee => (
          <Card key={employee._id} sx={{ width: 300, mt: 2, p: 2 }}>
            <Box display="flex" justifyContent="end">
              <IconButton>
                <EditIcon fontSize="small" color="info" onClick={() => { toggleUpdateModalOpen(); setUpfatedEmployee(employee) }} />
              </IconButton>
              <IconButton onClick={() => { toggleDeleteModalOpen(); setSelectedEmployee(employee) }}>
                <DeleteOutlineIcon fontSize="small" color="error" />
              </IconButton>
            </Box>
            <CardActionArea>
              <Box display="flex" gap={2}>
                <Avatar
                  alt={employee.name}
                  src={`${process.env.REACT_APP_URL}/${employee.photo}`}
                  sx={{ width: 80, height: 80 }}
                />
                <Typography gutterBottom sx={{ fontSize: 16, fontWeight: 800 }} component="div">
                  {`${employee.surname} ${employee.name} ${employee.secondName}`}
                </Typography>
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                <Typography gutterBottom sx={{ fontSize: 16, fontWeight: 800 }} component="div">
                  {employee.birthday ? `${dayjs(employee.birthday).format("YYYY-MM-DD")} (${dayjs().diff(dayjs(employee.birthday), "year")} р.)` :
                  "Немає даних про день народження"}
                </Typography>
                  {employee.position}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <AddEmployeeModal
        open={isModalOpen}
        handleClose={toggleModalOpen}
        refreshEmployees={refreshEmployees}
        title="Додати нового працівника"
      />
      <UpdateEmployeeModal
        open={isUpdateModalOpen}
        handleClose={toggleUpdateModalOpen}
        refreshEmployees={refreshEmployees}
        title="Оновити дані працівника"
        employee={updatedEmployee}
      />
      <WarningDialog
        open={isDeleteModalOpen}
        handleClose={toggleDeleteModalOpen}
        handleConfirm={handleDelete}
        title="Видалити працівника"
        text={`Ви впевнені, що бажаєте видалити ${selectedEmployee?.name} ${selectedEmployee?.surname}?`}
      />
    </>
  );
}

export default Employees;