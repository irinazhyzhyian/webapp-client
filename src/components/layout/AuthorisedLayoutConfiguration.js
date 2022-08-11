import React, {useContext} from 'react';
import Layout from "./Layout";
import {AuthContext} from "../../contexts/AuthContext";
import {applyAuthorizationHeader} from "../../api/axiosConfig";

function AuthorisedLayoutConfiguration({children}) {
    const {token} = useContext(AuthContext);
    applyAuthorizationHeader(token);

    return (
        <Layout>
            {children}
        </Layout>
    );
}

export default AuthorisedLayoutConfiguration;