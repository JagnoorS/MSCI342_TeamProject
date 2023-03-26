import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';



const serverURL = ""; //enable for dev mode
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit">
                FuelFlex
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

    };

    const [openTask, setOpenTask] = React.useState(false);

    const handleClickOpenTask = () => {
        setOpenTask(true);
    };

    const handleCloseTask = () => {
        setOpenTask(false);
    };

    const [openEdit, setOpenEdit] = React.useState(false);

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const [openDelete, setOpenDelete] = React.useState(false);

    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    const [taskName, settaskName] = React.useState("");
    const [taskDescription, settaskDescription] = React.useState("");
    const [taskAssigned, settaskAssigned] = React.useState("");


    const callApiaddTask = async () => {
        const url = serverURL + "/api/addTask";
        console.log(url);

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(creatTask),
            headers: {
                'Content-Type': "application/json"
            }
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const creatTask = {
        taskName: taskName,
        taskDescription: taskDescription,
        taskAssigned: taskAssigned
    }

    const [taskNames, changetaskNames] = React.useState([])

   const gettaskName = () => {
    callApigettaskName()
      .then(res => {
        console.log("callApigettaskName returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApigetaskName parsed: ", parsed);
        changetaskNames(parsed);
      })
  }

  React.useEffect(() => {
    gettaskName();
  }, []);

  const callApigettaskName = async () => {
    const url = serverURL + "/api/gettaskName";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers:{
        'Content-Type':"application/json"
      }
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }


    const [taskNameEdit, settaskNameEdit] = React.useState("");
    const [taskDescriptionEdit, settaskDescriptionEdit] = React.useState("");
    const [taskAssignedEdit, settaskAssignedEdit] = React.useState("");

    const callApieditTask = async () => {
        const url = serverURL + "/api/editTask";
        console.log(url);

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(editTask),
            headers: {
                'Content-Type': "application/json"
            }
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const editTask = {
        taskNameEdit: taskNameEdit,
        taskDescriptionEdit: taskDescriptionEdit,
        taskAssignedEdit: taskAssignedEdit
    }


    const [taskNameDelete, settaskNameDelete] = React.useState("");

    const callApideleteTask = async () => {
        const url = serverURL + "/api/deleteTask";
        console.log(url);

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(deleteTask),
            headers: {
                'Content-Type': "application/json"
            }
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const deleteTask = {
        taskNameDelete: taskNameDelete
    }

    const [task, changetask] = useState()


const gettasks = () => {
  callApigettasks()
    .then(res => {
      console.log("callApigettasks returned: ", res)
      var parsed = JSON.parse(res.express);
      console.log("callApigettasks parsed: ", parsed);
      changetask(parsed);
    })
}

React.useEffect(() => {
  gettasks();
}, []);

const callApigettasks = async () => {
  const url = serverURL + "/api/gettasks";
  console.log(url);

  const response = await fetch(url, {
    method: "POST",
    headers:{
      'Content-Type':"application/json"
    }
  });
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}


const columns = [
    { field: 'TaskName', headerName: 'Task Name', width: 190 },
    { field: 'TaskDescription', headerName: 'Description', width: 300 },
    { field: 'AssignedTo', headerName: 'Assigned To', width: 160 },
  ];
  


const[rows, setRows] = useState([])
   useEffect(() => {
    if (!task){return}
    task.map((item)=>{
      
      const newRow = {
        id: item.id,
        TaskName: item.task_name,
        TaskDescription: item.task_description,
        AssignedTo: item.task_assigned_to
    }
    setRows(rows => [...rows, newRow])
  })
    
    },[task])
  

    return (
        <div align='center'>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                />
            </div>
            <div align='center'>
                <Button variant="contained" style={{ colour: '#000000', background: '#000000', marginRight: '30px', marginTop: '100px' }} size='large' onClick={handleClickOpenTask}>
                    Create Task
                </Button>
                <Dialog open={openTask} onClose={handleCloseTask}>
                    <DialogTitle>Create Task To-Do</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please indicate the task to be completed and assign it to an employee or write "unassigned" if it is not an assigned task.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Task Name:"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={taskName}
                            onChange={(e) => settaskName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Description:"
                            type="text"
                            fullWidth
                            multiline
                            maxRows={10}
                            variant="standard"
                            value={taskDescription}
                            onChange={(e) => settaskDescription(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Assigned to:"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={taskAssigned}
                            onChange={(e) => settaskAssigned(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseTask}>Cancel</Button>
                        <Button onClick={() => {
                            callApiaddTask();
                            handleCloseTask();
                            alert('Your Task has been created!');
                            window.location.reload()
                        }}>Create
                        </Button>
                    </DialogActions>
                </Dialog>

                <Button variant="contained" style={{ colour: '#000000', background: '#000000', marginRight: '30px', marginTop: '100px' }} size='large' onClick={handleClickOpenEdit}>
                    Edit Task
                </Button>
                <Dialog open={openEdit} onClose={handleCloseEdit}>
                    <DialogTitle>Edit Task To-Do</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please choose a task you would like to edit from the drop-down below.
                        </DialogContentText>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Task Name:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                value={taskNameEdit}
                                onChange={(e) => settaskNameEdit(e.target.value)}
                               
                            >
                            {taskNames.map((item) => {
                                return (
                                    <MenuItem value={item.task_name}>{item.task_name}</MenuItem>
                                )
                                    })} 
                            
                            </Select>

                        </FormControl>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Edit Description:"
                            type="text"
                            fullWidth
                            multiline
                            maxRows={10}
                            variant="standard"
                            value={taskDescriptionEdit}
                            onChange={(e) => settaskDescriptionEdit(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Edit Assigned to:"
                            type="text"
                            fullWidth
                            variant="standard"
                            value = {taskAssignedEdit}
                            onChange={(e) => settaskAssignedEdit(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseEdit}>Cancel</Button>
                        <Button onClick={() => {
                            callApieditTask();
                            handleCloseEdit();
                            alert('Your Task has been edited!');
                            window.location.reload()
                        }}>Edit
                        </Button>
                    </DialogActions>
                </Dialog>

                <Button variant="contained" style={{ colour: '#000000', background: '#000000', marginRight: '30px', marginTop: '100px' }} size='large' onClick={handleClickOpenDelete}>
                    Delete Task
                </Button>
                <Dialog open={openDelete} onClose={handleCloseDelete}>
                    <DialogTitle>Delete Task To-Do</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please choose a task you would like to Delete from the drop-down below.
                        </DialogContentText>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Task Name:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                value={taskNameDelete}
                                onChange={(e) => settaskNameDelete(e.target.value)}
                            >
                                {taskNames.map((item) => {
                                return (
                                    <MenuItem value={item.task_name}>{item.task_name}</MenuItem>
                                )
                                    })}
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDelete}>Cancel</Button>
                        <Button onClick={() => {
                            callApideleteTask();
                            handleCloseDelete();
                            alert('Your Task has been Deleted!');
                            window.location.reload()
                        }}>Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        </div>

    );
}