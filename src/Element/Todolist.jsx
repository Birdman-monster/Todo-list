import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Form from "../Components/Form";
import Header from "../Components/Header";
import Liste from "../Components/Liste";

export default function FixedContainer() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleEditTask = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor:'#827717',
          height:'560px',
          marginTop:'70px',
          width:'600px',
          marginLeft:'330px',
          borderRadius:'5px'
            }}>
              <Box
              sx={{
                paddingTop:'40px',   
              }}
              >
            <Header/>
            <Form onButtonClick={handleAddTask} />
            </Box>
             <Box
             marginTop={'60px'}
             >
              <Liste
                tasks={tasks}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
              </Box> 

        </Box>
        
      </Container>
    </React.Fragment>
  );
}
