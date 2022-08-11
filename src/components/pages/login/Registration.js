import React, { useContext } from "react";
import { registrateUser } from "../../../api/loginApi";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { AuthContext } from "../../../contexts/AuthContext";

const Registration = () => {
    const navigate = useNavigate();
    const { saveToken } = useContext(AuthContext);


    const handleSubmit = async (email, password) => {
        await registrateUser({
            username: email,
            password,
        }, saveToken);
        navigate('/login');
    };

    return (
        <AuthForm
            handleSubmit={handleSubmit}
            title="Зареєструватись"
        />
    );
}

export default Registration;