import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

function TemporaryDrawer({isOpen, setIsOpen, children}) {
    return (
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <List>
                {children}
            </List>
        </Drawer>
    );
}


export default TemporaryDrawer;