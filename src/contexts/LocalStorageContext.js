import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LocalStorageContext = createContext();

const LocalStorageContextProvider = (props) => {

    const [localStorageValue, setLocalStorageValue] = useState(null);

    const getStorageItem = (localStorageKey) => {
        const localStorageValue = localStorage.getItem(localStorageKey);
        const value = JSON.parse(localStorageValue);
        return value;
    };

    const setStorageItem = (localStorageKey, localStorageValue) => {
        localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
        setLocalStorageValue(localStorageValue);
    };

    const clearStorageItem = (localStorageKey) => {
        localStorage.removeItem(localStorageKey);
        setLocalStorageValue(null);
    };

    return <LocalStorageContext.Provider value={{ localStorageValue, getStorageItem, setStorageItem, clearStorageItem }}>{props.children}</LocalStorageContext.Provider>
};

LocalStorageContextProvider.propTypes = {
    children: PropTypes.object,
};

export default LocalStorageContextProvider;
