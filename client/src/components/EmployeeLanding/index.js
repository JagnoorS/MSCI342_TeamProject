import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"
//import './index.css';
import Card from '@material-ui/core/Card'

const EmployeeLanding = () =>  {

    const style={
        backgroundImage: "url(https://wallpaper.dog/large/17056599.jpg)",
        height: '93.1vh',
        marginTop:'0px',
        fontsize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
    <div style={style}>

    <div align='center'>

            <Typography variant="h2" component="div" gutterBottom style={{marginBottom:'20px'}}>
                Welcome to FuelFlex's Employee Portal
            </Typography>
        <div>
        <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B'}}>
            <Typography variant='h3' style={{color:'white', marginTop:'15px'}}>
                Manage Work
            </Typography>

            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px', outline: 'red'}} size='large' onClick= {()=> history.push('/E_Announcements')}>Announcements</Button>
            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/SalesEntry')}>Sales Entry</Button>
            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/EmployeeChecklist')}>To-Do List</Button>
        </Card>
        </div>

        <div>
        <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B', marginTop:'40px'}} >
            <Typography variant='h3' style={{color:'white',  marginTop:'15px'}}>
                    Manage Time
            </Typography>
        <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/EmployeeAvailability')}>Log Availability</Button>
        <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/E_LogEmployeeHours')}>Log Hours</Button>
        </Card>
        </div>


        <div>
        <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B', marginTop: '40px' }}>
            <Typography variant='h3' style={{color:'white',  marginTop:'15px'}}>
                Request forms
            </Typography>
            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/Help')}>Request Help</Button>

            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/TimeOff')}>Time Off Request</Button>

        </Card>
        </div>



    </div>
    </div>
    );
}

export default EmployeeLanding;










