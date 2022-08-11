import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from '@mui/material/List';
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useToggle } from 'react-use';
import { MenuItem } from "@mui/material";

const menuItem = {
  padding: 0,
  marginBottom: 2
};

const list = {
  padding: 0,
  width: '100%'
};
function ListItemLink({ icon, primary, children }) {
  const [isOpen, toggle] = useToggle(false);


  return (
    <MenuItem sx={menuItem}>
      <List sx={list}>
        <ListItem button onClick={toggle}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isOpen}>
          <List>
            {children}
          </List>
        </Collapse>
      </List>
    </MenuItem>
  );
}


export default ListItemLink;
