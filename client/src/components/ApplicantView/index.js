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
const [applicant, changeapplicant] = useState()


const getapplicant = () => {
  callApigetapplicant()
    .then(res => {
      console.log("callApigetapplicant returned: ", res)
      var parsed = JSON.parse(res.express);
      console.log("callApigetapplicant parsed: ", parsed);
      changeapplicant(parsed);
    })
}

React.useEffect(() => {
  getapplicant();
}, []);

const callApigetapplicant = async () => {
  const url = serverURL + "/api/getapplicant";
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
    { field: 'Address', headerName: 'Address', width: 190 },
    { field: 'City', headerName: 'City', width: 190 },
    { field: 'Province', headerName: 'Province', width: 190 },
    { field: 'PostalCode', headerName: 'PostalCode', width: 190 },
    { field: 'PhoneNumber', headerName: 'Phone Number', width: 190 },
    { field: 'Email', headerName: 'Email', width: 190 },
    { field: 'DOB', headerName: 'Date of Birth', width: 190 },
    { field: 'Location', headerName: 'Location', width: 190 },
  ];
  


const[rows, setRows] = useState([])
   useEffect(() => {
    if (!applicant){return}
    applicant.map((item)=>{
      
      const newRow = {
        id: item.id,
        FirstName: item.first_name,
        LastName: item.last_name,
        Address: item.address,
        City: item.city,
        Province: item.province,
        PostalCode: item.postal_code,
        PhoneNumber: item.phone_number,
        Email: item.email_address,
        DOB: item.date_of_birth,
        Location: item.location
    }
    setRows(rows => [...rows, newRow])
  })
    
    },[applicant])
  
  
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