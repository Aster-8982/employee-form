import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    },
}))

export default function Button(props) {

    const { text, color, size, variant, onClick, ...other } = props;
    const classes = useStyles();

    return (
        <MuiButton
            color={color || "primary"}
            size={size || "large"}
            variant={variant || "contained"}
            onClick={onClick}
            {...other}
            classes={{root:classes.root, label:classes.label}}>
            {text}
        </MuiButton>
    )
}
