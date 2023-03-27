import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"
//import './index.css';
import Card from '@material-ui/core/Card'


const CustomerLanding = () =>  {

    const style={
        backgroundImage: "url(https://wallpaper.dog/large/17056599.jpg)",
        marginTop:'0px',
        height: '93.1vh',
        fontsize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style={style}>
        <div align='center'>

            <Typography variant="h2" component="div" gutterBottom style={{marginBottom:'90px', }}>
                Welcome to FuelFlex's Customer Portal
            </Typography>
            </div>
        <div align='center'>

            <div>
            <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B'}}>
                <Typography variant='h3' style={{color:'white', marginTop:'15px'}}>
                    Apply to work here
                </Typography>

                <Button variant="contained" style={{width: '280px', height:'75px', color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px', fontSize: '15px'}} size='large' onClick= {()=> history.push('/Application')}>Apply Here</Button>
            </Card>
            </div>

            <div>
            <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B', marginTop:'150px'}} >
                <Typography variant='h3' style={{color:'white',  marginTop:'15px'}}>
                        Submit any feedback or complaints
                </Typography>
                <Button variant="contained" style={{width: '280px', height:'75px', color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px', fontSize: '15px'}} size='large' onClick= {()=> history.push('/CustomerFeedBack')}>Submit FeedBack</Button>
            </Card>
            </div>






        </div>
        </div>

        


    );
}

export default CustomerLanding;