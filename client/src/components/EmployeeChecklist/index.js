import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
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
export default function DataTable() {
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
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
  }