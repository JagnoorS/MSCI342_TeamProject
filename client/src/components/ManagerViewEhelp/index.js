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
const [E_help, changeE_help] = useState()


const getEmployeeHelp = () => {
  callApigetEmployeeHelp()
    .then(res => {
      console.log("callApigetEmployeeHelp returned: ", res)
      var parsed = JSON.parse(res.express);
      console.log("callApigetEmployeeHelp parsed: ", parsed);
      changeE_help(parsed);
    })
}

React.useEffect(() => {
  getEmployeeHelp();
}, []);

const callApigetEmployeeHelp = async () => {
  const url = serverURL + "/api/getEmployeeHelp";
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
    { field: 'FirstName', headerName: 'First Name', width: 200 },
    { field: 'LastName', headerName: 'Last Name', width: 200 },
    { field: 'ProblemDescription', headerName: 'Problem Description', width: 500 },
  ];
  


const[rows, setRows] = useState([])
   useEffect(() => {
    if (!E_help){return}
    E_help.map((item)=>{
      
      const newRow = {
        id: item.id,
        FirstName: item.first_name,
        LastName: item.last_name,
        ProblemDescription: item.issue
    }
    setRows(rows => [...rows, newRow])
  })
    
    },[E_help])
  
  
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