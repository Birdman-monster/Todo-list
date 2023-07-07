import * as React from 'react';
import { Typography } from '@mui/material';


export default function Header() {
    return (

        <Typography variant='h4'
        sx={{
            color:'white',
            textAlign:'center',
            marginBottom:'34px'
        }}
        >
        Todo-List
     </Typography>

    );
}