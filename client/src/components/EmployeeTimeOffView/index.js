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
const [time_off, changetime_off] = useState()


const getEmployeeTimeOff = () => {
  callApigetEmployeeTimeOff()
    .then(res => {
      console.log("callApigetEmployeeTimeOff returned: ", res)
      var parsed = JSON.parse(res.express);
      console.log("callApigetEmployeeTimeOff parsed: ", parsed);
      changetime_off(parsed);
    })
}

React.useEffect(() => {
  getEmployeeTimeOff();
}, []);

const callApigetEmployeeTimeOff = async () => {
  const url = serverURL + "/api/getEmployeeTimeOff";
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
    { field: 'FirstName', headerName: 'First Name', width: 190 },
    { field: 'LastName', headerName: 'Last Name', width: 190 },
    { field: 'StartDate', headerName: 'Start Date', width: 190 },
    { field: 'EndDate', headerName: 'End Date', width: 190 }

  ];
  


const[rows, setRows] = useState([])
   useEffect(() => {
    if (!time_off){return}
    time_off.map((item)=>{
      
      const newRow = {
        id: item.id,
        FirstName: item.first_name,
        LastName: item.last_name,
        StartDate: item.start_date,
        EndDate: item.end_date
    }
    setRows(rows => [...rows, newRow])
  })
    
    },[time_off])
  
  
    return (
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    );
  }