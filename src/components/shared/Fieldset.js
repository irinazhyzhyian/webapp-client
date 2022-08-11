import React from "react";
import { useTheme } from "@mui/material";

const Fieldset = ({legend, sx, children}) => {
    const theme = useTheme();

    const style = {
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '5px',
        color: theme.palette.primary.main,
        fontSize: 12,
        padding: 20,
        ...sx
    };

    return(
        <fieldset style={style}>
            <legend>{legend}</legend>
            {children}
        </fieldset>
    );
};

export default Fieldset;