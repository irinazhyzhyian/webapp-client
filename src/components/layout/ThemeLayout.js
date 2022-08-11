import React, { createContext, useState } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { THEME_LIGHT } from './themeLight';
import { LOCAL_STORAGE_KEYS } from '../../constants/localStorageKeys';
import { THEMES } from '../../constants/themes';
import { THEME_DARK } from './themeDark';

export const ThemeContext = createContext({});

function ThemeLayout({ children }) {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme) || THEMES.light;

    const [themeOptions, setThemeOptions] = useState(
        resolveThemeOptions(defaultTheme)
    );
    const [selectedTheme, setSelectedTheme] = React.useState(defaultTheme);
    const theme = createTheme(themeOptions);

    const onThemeSelected = (value) => {
        console.log(value);
        const themeOptions = resolveThemeOptions(value);
        setThemeOptions(themeOptions);
        setSelectedTheme(value);
        localStorage.setItem(LOCAL_STORAGE_KEYS.theme, value);
    };

    function resolveThemeOptions(themeEnumValue) {
        console.log(themeEnumValue, defaultTheme, themeEnumValue=== defaultTheme)
        switch (themeEnumValue) {
            case THEMES.light:
                return THEME_LIGHT;
            case THEMES.dark:
                return THEME_DARK;
            default:
                return THEME_LIGHT;
        }
    }

    return (
        <ThemeContext.Provider value={{ selectedTheme, onThemeSelected }}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeLayout;
