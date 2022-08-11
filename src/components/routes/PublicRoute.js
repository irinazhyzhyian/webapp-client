import React, {useContext} from "react";
import {Navigate} from 'react-router-dom';
import PropTypes from "prop-types";
import {AuthContext} from "../../contexts/AuthContext";

export default function PublicRoute({component: Component}) {
  const {token} = useContext(AuthContext);

  return (
      <> 
       { token ? 
          <Navigate replace to="/" />
         : 
          <Component />
        }
      </>
  );
}

PublicRoute.propTypes = {
  component: PropTypes.elementType,
};
