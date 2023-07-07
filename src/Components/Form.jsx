import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';



export default function FullWidthTextField({ onButtonClick }){

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      onButtonClick(inputValue);
      setInputValue('');
    }
  };
  
  return (
    <Box
      sx={{
        width: 400,
        maxWidth: '100%',
        paddingLeft:'14px',
      }}
    >
    <TextField  
    
    fullWidth id="fullWidth"
     placeholder='Entrer une to do list'
      sx={{bgcolor:'white',
      borderRadius:'7px',
    }}  
    value={inputValue}
    onChange={handleInputChange}
    />
     <Button variant='contained' type='submit'
     sx={{
      float:'right',
      left:'146px',
      bottom:'45px'
     }}
     onClick={handleButtonClick}
     >
      Add List
      <AddIcon/>
     </Button>
    </Box>
  );
}