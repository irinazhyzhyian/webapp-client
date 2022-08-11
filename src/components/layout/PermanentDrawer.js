import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';

const DRAWER_WIDTH = 300;
const useStyles = makeStyles(() => ({
    drawerOpened: {
        width: DRAWER_WIDTH,
        top: 127,
        paddingLeft: 8
    },
}));

function PermanentDrawer({ isOpen, children }) {
    const classes = useStyles();
    const drawerStyle = isOpen ? { width: DRAWER_WIDTH } : {};

    return (
        <Hidden lgDown>
            <Drawer variant="persistent"
                sx={drawerStyle}
                open={isOpen}
                SlideProps={{ classes: { root: classes.drawerOpened } }}
            >
                <List>
                    {children}
                </List>
            </Drawer>
        </Hidden>
    );
}

export default PermanentDrawer;
