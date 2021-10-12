import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input (props) {
    const { label, value, error=null, name, onChange, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true, helperText:error})}
        />
    )
};
