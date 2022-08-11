import React, {useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AuthorisedLayoutConfiguration from "../layout/AuthorisedLayoutConfiguration";
import Login from "../pages/login/Login";


export default function PrivateRoute({component: Component}) {
    const {token} = useContext(AuthContext);
    const authorisedComponent =  <AuthorisedLayoutConfiguration><Component/></AuthorisedLayoutConfiguration>;
    const unauthorisedComponent = <Login/>;
    return token ? authorisedComponent : unauthorisedComponent;
}

