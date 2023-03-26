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
const [announcement, changeannouncement] = useState()


const getannouncement = () => {
  callApigetannouncement()
    .then(res => {
      console.log("callApigetannouncement returned: ", res)
      var parsed = JSON.parse(res.express);
      console.log("callApigetannouncement parsed: ", parsed);
      changeannouncement(parsed);
    })
}

React.useEffect(() => {
  getannouncement();
}, []);

const callApigetannouncement = async () => {
  const url = serverURL + "/api/getannouncement";
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
    { field: 'Message', headerName: 'Message', width: 190 },
    { field: 'Author', headerName: 'Author', width: 300 },
    { field: 'Urgency', headerName: 'Urgency', width: 160 },
  ];
  


const[rows, setRows] = useState([])
   useEffect(() => {
    if (!announcement){return}
    announcement.map((item)=>{
      
      const newRow = {
        id: item.id,
        Message: item.message,
        Author: item.first_name + " " + item.last_name,
        Urgency: item.type
    }
    setRows(rows => [...rows, newRow])
  })
    
    },[announcement])
  
  
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