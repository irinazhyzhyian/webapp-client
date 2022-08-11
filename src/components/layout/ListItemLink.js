import React, { forwardRef, useMemo } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import { MenuItem } from '@mui/material';

const menuItem = {
    padding: 0,
    marginBottom: 2
};
function ListItemLink({ icon, primary, to, setIsOpen, permission }) {
    const CustomLink = useMemo(() => {
        const forwarding = (props, ref) => <RouterLink ref={ref} to={to} {...props} />;
        return forwardRef(forwarding);
    }, [to]);

    function handleOnClick() {
        if (setIsOpen)
            return setIsOpen();

        return true;
    }

    return (
        <MenuItem sx={menuItem}>
            <ListItem button component={CustomLink} onClick={handleOnClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary} />
            </ListItem>
        </MenuItem>
    );
}

export default ListItemLink;