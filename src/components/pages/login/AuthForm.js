import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import university from "../../../assets/chnu.jpeg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const AuthForm = ({ handleSubmit, isLogin, title }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const isRepeatPasswordSame = !isLogin && password === repeatPassword;

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await handleSubmit(email, password);
        setLoading(false);
    };
    return (
        <Box display="flex" justifyContent="center" height="100vh" width="100vw" gap={2}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="40%" gap={3} sx={{ minWidth: "300px" }}>
                <Box display="flex" flexDirection="column" width="90%" gap={3}>
                    <Typography variant="h5" color="secondary" sx={{ fontWeight: 800 }}>{title}</Typography>
                    <form style={{ display: "flex", flexDirection: "column", gap: 34 }} onSubmit={onSubmit}>
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            label="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            type="password"
                            fullWidth
                        />
                        {!isLogin &&
                                <TextField
                                label="Повторіть пароль"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                variant="outlined"
                                type="password"
                                error={!isRepeatPasswordSame}
                                helperText={!isRepeatPasswordSame ? "Паролі не збігаються" : ""}
                                fullWidth
                            />
                            }
                        <Box display="flex" gap={3}>
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submite"
                                startIcon={<ArrowForwardIcon />}
                            >
                                {loading ? "Завантаження..." : "Ввійти"}
                            </Button>
                            {isLogin &&
                                <Button
                                    variant="contained"
                                    startIcon={<AppRegistrationIcon />}
                                    onClick={() => navigate('/registration')}
                                >
                                    Реєстрація
                                </Button>
                            }
                        </Box>
                    </form>
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                height="100vh"
                width="100vw"
                sx={{ backgroundImage: `url(${university})`, backgroundRepeat: 'no-repeat' }}
            />
        </Box>
    );
}

export default AuthForm;