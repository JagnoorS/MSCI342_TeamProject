import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"


const GraphLanding = () =>  {   


    const style={
        backgroundImage: "url(https://scontent-ord5-1.xx.fbcdn.net/v/t1.15752-9/334885375_708742761046620_7014199253196400788_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xPVcKi1ZpzgAX8pDfYj&_nc_ht=scontent-ord5-1.xx&oh=03_AdTUu-lESeypKrT6pr6-VF_NvBktQiH8hAbBAg6gjHY8QQ&oe=6429E2A2)",
        height: '100vh',
        marginTop:'0px',
        fontsize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style={style}>
        <div align='center'>
            <Typography variant="h2" component="div" >
                Welcome to your Data Visualization Portal
            </Typography>
            <Typography variant="h4" component="div" >
               Select which Sales data you wish to visualize
            </Typography>
            </div>
            <div align='center'>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/GasDataLanding')}>Gas Sales Visualizations</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/StoresSAlesData')}>Store Sales Visualizations</Button>
            </div>


            </div>


        
    );
}

export default GraphLanding;