import { HomeOutlined, TableChartOutlined } from "@mui/icons-material";
import React from "react";
import ListItemLink from "./ListItemLink";
import ListItemDropdown from "./ListItemDropdown";
import { URLS } from "../routes/urls";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';


function DrawerLinks({ setIsOpen }) {

  return (
    <>
      <ListItemLink to={URLS.home} icon={<HomeOutlined />} primary={"Головна сторінка"} setIsOpen={setIsOpen} />
      <ListItemDropdown icon={<TableChartOutlined />} primary={"Для завідувача"}>
        <ListItemLink to={URLS.employees} primary={"Працівники"} setIsOpen={setIsOpen} />
        <ListItemLink to={URLS.documents} primary={"Документація"} setIsOpen={setIsOpen} />
        <ListItemLink to={URLS.students} primary={"Студенти"} setIsOpen={setIsOpen} />
      </ListItemDropdown>
      <ListItemLink icon={<FolderOpenIcon/>} to={URLS.accreditation} primary={"Акредитація"} setIsOpen={setIsOpen} />
    </>);
}


export default DrawerLinks;