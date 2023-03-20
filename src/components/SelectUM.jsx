import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const SelectUM = () => {


    const [age, setAge] = useState('');


    const handleChange = (event) => {
        setAge(event.target.value);
    };
    // setAge('Month')
    return (


        <>
            <Box sx={{ minWidth: 120 ,height: 20}}>
                <FormControl  fullWidth>
                    <InputLabel sx={{color: 'white', border: 'white'}} id="demo-simple-select-label">Month</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Month"
                        onChange={handleChange}
                        sx={{color: 'white', border: 'white' , }}
                    >
                        <MenuItem sx={{color: 'black' }} value="January">January</MenuItem>
                        <MenuItem sx={{color: 'black' }} value="February ">February </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="March ">March </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="April ">April </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="May ">May </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="June ">June </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="July ">July </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="August ">August </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="September ">September </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="October ">October </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="November ">November </MenuItem>
                        <MenuItem sx={{color: 'black' }} value="December ">December </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>);
}

export default SelectUM;