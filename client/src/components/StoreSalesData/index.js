import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"
import Card from '@material-ui/core/Card'

const StoreSalesData = () =>  {   


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
                Store Sales Data
            </Typography>

            <div>
            <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B'}}>
                <Typography variant='h3' style={{color:'white', marginTop:'15px'}}>
                    Daily Sales
                </Typography>
                <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/S_DailyLotterySales')}>Daily Lottery Sales</Button>
                <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/S_DailyNetSales')}>Daily Net Sales</Button>
                <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/S_DailyStoreSales')}>Daily Store Sales</Button>


            </Card>
            </div>

            <div>
            <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B', marginTop:'150px'}} >
                <Typography variant='h3' style={{color:'white',  marginTop:'15px'}}>
                       Net Sales 
                </Typography>
                <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/S_NetCreditCard')}>Net Credit Card</Button>
                <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/S_NetStoreSales')}>Net Store Sales</Button>
          
            </Card>
            </div>
            </div>
            </div>


        
    );
}

export default StoreSalesData;


