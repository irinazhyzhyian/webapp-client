import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const tokenKey = 'token';

    const getToken = () => {
        const tokenString = sessionStorage.getItem(tokenKey);
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        sessionStorage.setItem(tokenKey, JSON.stringify(userToken));
        setToken(userToken.token);
    };

    const clearToken = () => {
        sessionStorage.removeItem(tokenKey);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{token, saveToken, clearToken}}>
            {props.children}
        </AuthContext.Provider>);
};

AuthContextProvider.propTypes = {
    children: PropTypes.object,
};

export default AuthContextProvider;
