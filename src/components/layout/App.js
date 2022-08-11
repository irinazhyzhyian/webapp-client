import React from 'react';
import ThemeLayout from './ThemeLayout';
import { BrowserRouter } from 'react-router-dom';
import ProjectRoutes from '../routes/ProjectRoutes';
import AuthContextProvider from '../../contexts/AuthContext';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from '../shared/SnackbarUtils';

function App() {
    return (
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <SnackbarUtilsConfigurator />
            <BrowserRouter basename={process.env.REACT_APP_BASENAME_URL}>
                <ThemeLayout>
                    <AuthContextProvider>
                        <ProjectRoutes />
                    </AuthContextProvider>
                </ThemeLayout>
            </BrowserRouter>
        </SnackbarProvider>
    );
}

export default App;
