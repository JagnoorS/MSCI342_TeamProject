import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"


const StoreSalesData = () =>  {   


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
                Select which data to visualize 
            </Typography>
            </div>
            <div align='center'>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/S_DailyLotterySales')}>Daily Lottery Sales</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/S_DailyNetSales')}>Daily Net Sales</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/S_DailyStoreSales')}>Daily Store Sales</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/S_NetCreditCard')}>Net Credit Card</Button>
            <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/S_NetStoreSales')}>Net Store Sales</Button>
            </div>


            </div>


        
    );
}

export default StoreSalesData;