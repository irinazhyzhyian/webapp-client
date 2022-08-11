import React, { useContext } from "react";
import { loginUser } from "../../../api/loginApi";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

const Login = () => {
    const { saveToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (email, password) => {
        await loginUser({
            username: email,
            password,
        }, saveToken);
        navigate('/');
    };

    return (
        <AuthForm
            handleSubmit={handleSubmit}
            isLogin
            title="Ввійти в аккаунт"
        />
    );
}

export default Login;