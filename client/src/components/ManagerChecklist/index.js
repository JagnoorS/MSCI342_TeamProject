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

    

    console.log(taskNames);

    const callApigettaskName = async () => {
        const url = serverURL + "/api/gettaskName";
        console.log(url);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            }
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const gettaskName = () => {
        callApigettaskName()
            .then(res => {
                console.log("callApigettaskName returned: ", res)
                var parsed = JSON.parse(res.express);
                console.log("callApigettaskName parsed: ", JSON.stringify(parsed));
                changetaskNames(parsed);
            })
    }

    React.useEffect(() => {
        gettaskName();
    }, []);







    return (
        <div align='center'>
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
                            >
                                {taskNames.map((task) => {
                                    <MenuItem value={10}>{task.task_name}</MenuItem>
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
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Edit Assigned to:"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseEdit}>Cancel</Button>
                        <Button onClick={handleCloseEdit}>Edit</Button>
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
                                //value={age}
                                label="Age"
                            //onChange={handleChange}
                            >
                                <MenuItem value={'Cleaning'}>cleaning</MenuItem>
                                <MenuItem value={'stock shelves'}>stock shelves</MenuItem>
                                <MenuItem value={'take out garbage'}>take out garbage</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDelete}>Cancel</Button>
                        <Button onClick={handleCloseDelete}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </div>

        </div>

    );
}