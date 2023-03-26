import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"



const ManagerLanding = () =>  {


    const style={
        backgroundImage: "url(https://wallpaper.dog/large/17056599.jpg)",
        height: '93vh',
        marginTop:'0px',
        fontsize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style={style}>
        <div align='center'>

            <Typography variant="h2" component="div" gutterBottom>
                Welcome to FuelFlex's Manager Portal
            </Typography>
            </div>
            <div align='center'>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/M_EmployeeLoggedHours')}>Logged Hours</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/M_Announcements')}>Submit Announcements</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/ManagerChecklist')}>Checklist</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/GraphLanding')}>Data Visualization</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/ApplicantView')}>Applicants</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/CustomerFeedbackView')}>Customer Feedback</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/ManagerViewEhelp')}>Employee Problem</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/EmployeeTimeOffView')}>Time Off Request</Button>
            </div>


            </div>


        
    );
}

export default ManagerLanding;