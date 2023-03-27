import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"
import Card from '@material-ui/core/Card'



const ManagerLanding = () =>  {


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
                Welcome to FuelFlex's Manager Portal
            </Typography>
            </div>
        <div align='center'>

            <div>
            <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B'}}>
                <Typography variant='h3' style={{color:'white', marginTop:'15px'}}>
                    Employee Management
                </Typography>

                <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px', outline: 'red'}} size='large' onClick= {()=> history.push('/M_EmployeeLoggedHours')}>Employee Logged Hours</Button>
                <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/EmployeeTimeOffView')}>Time Off Requests</Button>
                <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/ManagerViewEhelp')}>Employee Help Requests</Button>
            </Card>
            </div>

            <div>
            <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B', marginTop:'40px'}} >
                <Typography variant='h3' style={{color:'white',  marginTop:'15px'}}>
                        Store Management
                </Typography>
            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/M_Announcements')}>Submit Announcements</Button>
            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/ManagerChecklist')}>Store Checklists</Button>
            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/GraphLanding')}>Sales Data Visualization</Button>
            </Card>
            </div>


            <div>
            <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B', marginTop: '40px' }}>
                <Typography variant='h3' style={{color:'white',  marginTop:'15px'}}>
                    Customer Management
                </Typography>
            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/CustomerFeedbackView')}>Customer Feedback</Button>
            <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/ApplicantView')}>Applications</Button>
            </Card>
            </div>



        </div>
        </div>


        
    );
}

export default ManagerLanding;