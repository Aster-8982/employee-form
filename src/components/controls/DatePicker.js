import React from 'react';
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import { Input } from '@material-ui/core';

export default function DatePicker(props) {

// const{name,label,value,onChange} = props;

// const convertToDefEventPara = (name, value) => ({
//     target: {
//         name, value
//     }
// })

    return (
        <div>
            <label>Hire Date</label> <br/>
            <Input type="date"  ></Input>
        </div>
    //     <MuiPickersUtilsProvider utils={DateFnsUtils} >

    //         <Input type="date"></Input>
    //    {/* <KeyboardDatePicker 
    //    disableToolbar
    //    variant="inline"
    //    inputVariant="outlined"
    //    label={label}
    //    value={value}
    //    format= "MM/dd/yyyy"
    //    name={name}
    //    onChange={date=>onChange(convertToDefEventPara(name,date))}
    //    /> */}
    //     </MuiPickersUtilsProvider>
     )
}
