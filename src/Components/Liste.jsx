import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { Button, TextField} from '@mui/material';


export default function Liste({ tasks, onEditTask, onDeleteTask }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleSave = (index) => {
    onEditTask(index, editValue);
    setEditIndex(-1);
    setEditValue('');
  };

  const handleDelete = (index) => {
    onDeleteTask(index);
  };

 

  return (
   
        <ul
        
        
        >
           
          {tasks.map((task, index) => (
            <li key={index} 
            style={{
                display: 'flex', 
                alignItems: 'center',
                marginBottom: '13px',
                color:'white',
                fontSize:'20px'
              }}
            
            >
              {editIndex === index ? (
                <>
                  <TextField
                  id="filled-hidden-label-small"
                  defaultValue="Small"
                  type='text'
                    maxRows={4}
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    sx={{
                      bgcolor: 'white',
                      borderRadius: '7px',
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                        left:'230px',
                   
                    }}
                    onClick={() => handleSave(index)}
                  >
                    Save
                    <SaveIcon />
                  </Button>
                </>
              ) : (
                <>
                  {task}
                  
                  <Button
                    variant="contained"
                    sx={{
                     left:'230px',
                     marginLeft: '10px' 
                        
                    
                    }}
                    onClick={() => handleEdit(index, task)}
                  >
                    Edit
                    <EditIcon />
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                        left:'250px',
                        marginLeft: '10px'
                          
                      
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                    <DeleteIcon />
                  </Button>
                </>
              )}
            </li>
          ))}
        </ul>
    
  );
}
