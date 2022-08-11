import React, { useContext } from 'react';
import { AppBar, Box, Breadcrumbs, Button, FormControlLabel, Hidden, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, Switch, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { URLS } from '../routes/urls';
import { THEMES } from '../../constants/themes';
import { ThemeContext } from './ThemeLayout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { PATHS } from '../../constants/paths';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../contexts/AuthContext';


const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
}

const toolbar = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
}

const breadcrumbs = theme => ({
    bgcolor: theme.palette.background.paper,
    minHeight: '40px',
    paddingLeft: '16px !important',
});


function Header({ setTemporaryDrawerOpen, setPersistentDrawerOpen, isPersistentDrawerOpen }) {
    const { selectedTheme, onThemeSelected } = useContext(ThemeContext);
    const {clearToken} = useContext(AuthContext);
    let location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeTheme = (event) => {
        if (event.target.checked) {
            onThemeSelected(THEMES.dark);
        } else {
            onThemeSelected(THEMES.light);
        }
    }
    const open = Boolean(anchorEl);

    const logout = () => {
        clearToken();
    }

    return (
        <Box position="sticky" top={0} left="auto" right={0} width={'100%'} zIndex={1101}>
            <AppBar position="sticky" sx={header}>
                <Toolbar sx={toolbar}>
                    <RouterLink to={URLS.home} style={{ textDecoration: 'none' }}>
                        <img width={80} height={35} src={logo} alt="logo" />
                    </RouterLink>
                </Toolbar>
                <Switch color="secondary" checked={selectedTheme === THEMES.dark} onChange={handleChangeTheme} />
                <DarkModeIcon />
                <IconButton variant="contained" sx={{marginRight: '40px'}} onClick={handleClick}>
                    <MoreVertIcon fontSize="large" sx={{ color: 'white' }} />
                </IconButton>
                <Popover
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                >
                    <List>
                        <ListItemButton onClick={logout}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Вийти" />
                        </ListItemButton>
                    </List>
                </Popover>
            </AppBar>
            <Toolbar sx={breadcrumbs}>
                <Hidden lgUp>
                    <Box>
                        <IconButton onClick={() => setTemporaryDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Hidden>
                <Hidden lgDown>
                    <Box>
                        <IconButton onClick={() => setPersistentDrawerOpen(!isPersistentDrawerOpen)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Hidden>
                <Breadcrumbs>
                    {PATHS[location.pathname]?.map((path, i) =>
                        <Typography key={i}>
                            {path}
                        </Typography>)
                    }
                </Breadcrumbs>
            </Toolbar>
        </Box>
    );
}

export default Header;
