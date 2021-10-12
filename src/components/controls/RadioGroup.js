import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup, } from '@material-ui/core';
import React from 'react'

export default function RadioGroup(props) {

    const { name, value, label, onChange,items } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}
            >
                {
                    items.map(
                        item => ( <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} /> )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}
