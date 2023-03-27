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
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
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

    const [openFilter, setOpenFilter] = React.useState(false);

    const handleClickOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const [value, setValue] = React.useState([null, null]);


    const [employeeNames, changeEmployeeNames] = React.useState([])
    
    const getemployeeName = () => {
        callApigetemployeeName()
          .then(res => {
            console.log("callApigetemployeeName returned: ", res)
            var parsed = JSON.parse(res.express);
            console.log("callApigetemployeeName parsed: ", parsed);
            changeEmployeeNames(parsed);
          })
      }
    
      React.useEffect(() => {
        getemployeeName();
      }, []);
    
      const callApigetemployeeName = async () => {
        const url = serverURL + "/api/getemployeeName";
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


      const [hour, changehour] = useState()
      const gethours = () => {
        callApigethours()
          .then(res => {
            console.log("callApigethours returned: ", res)
            var parsed = JSON.parse(res.express);
            console.log("callApigethours parsed: ", parsed);
            changehour(parsed);
          })
      }
      
      React.useEffect(() => {
        gethours();
      }, []);
      
      const callApigethours = async () => {
        const url = serverURL + "/api/gethours";
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
        { field: 'Name', headerName: 'Employee Name', width: 190 },
        { field: 'DateWorked', headerName: 'Date Worked', width: 190 },
        { field: 'StartTime', headerName: 'Start Time', width: 190 },
        { field: 'EndTime', headerName: 'End Time', width: 190 },
        { field: 'HoursWorked', headerName: 'Hours Worked', width: 190 },
      ];
      
    
    
    const[rows, setRows] = useState([])
       useEffect(() => {
        if (!hour){return}
        hour.map((item)=>{
          
          const newRow = {
            id: item.id,
            Name: item.first_name + " " + item.last_name,
            DateWorked: item.reporting_date,
            StartTime: item.start_time,
            EndTime: item.end_time,
            HoursWorked: item.difference
        }
        setRows(rows => [...rows, newRow])
      })
        
        },[hour])




    return (
        <div align='center'>
            <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
            <div align='center'>
                {/* <Button variant="contained" style={{ color:'white' , background: '#B00000', marginRight: '30px', marginTop: '100px' }} size='large' onClick={handleClickOpenFilter}>
                Filter
                </Button> */}
                <Dialog open={openFilter} onClose={handleCloseFilter}>
                    <DialogTitle>Filter Employee Hours </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please indicate first & last name, along with a period to filter by.
                        </DialogContentText>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Employee Name:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                //value={taskNameEdit}
                                //onChange={(e) => settaskNameEdit(e.target.value)}
                               
                            >
                            {employeeNames.map((item) => {
                                return (
                                    <MenuItem value={item.first_name + " " + item.last_name}>{item.first_name + " " + item.last_name}</MenuItem>
                                )
                                    })} 
                            
                            </Select>

                        </FormControl>
                        <Stack spacing={3} marginTop='20px'>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                localeText={{ start: 'Start', end: 'End' }}
                            >
                                <DesktopDateRangePicker
                                    value={value}
                                    onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <TextField {...startProps} />
                                        <Box sx={{ mx: 2 }}> to </Box>
                                        <TextField {...endProps} />
                                    </React.Fragment>
                                )}
                            />
                            </LocalizationProvider>
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseFilter}>Cancel</Button>
                        <Button onClick={
                            // add API call here
                            handleCloseFilter
                            //alert('Empty for now');
                        }>Filter
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        </div>

    );
}
