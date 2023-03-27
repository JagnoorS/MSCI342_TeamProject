import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"
import Card from '@material-ui/core/Card'



const GraphLanding = () =>  {   


    const style={
        backgroundImage:"url(https://wallpaper.dog/large/17056599.jpg)",
        height: '100vh',
        marginTop:'0px',
        fontsize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style={style}>
            
 
            <div align='center'>
            <Typography variant="h2" component="div" gutterBottom style={{marginBottom:'20px'}}>
                    Gas Sales Data
                </Typography>
            
                <div>
                <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B'}}>
                    <Typography variant='h3' style={{color:'white', marginTop:'15px'}}>
                        Total Sales
                    </Typography>
                    <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/L_TotalNet')}>Total Net</Button>
                    <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/L_TotalGross')}>Total Gross</Button>
                    <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/L_RegularSales')}>Regular Sales</Button>
            
                </Card>
                </div>
            
                <div>
                <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B', marginTop:'150px'}} >
                    <Typography variant='h3' style={{color:'white',  marginTop:'15px'}}>
                           Net Sales
                    </Typography>
                    <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/L_MidNet')}>Mid Net</Button>
                    <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/L_RegularNet')}>Regular Net</Button>
                    <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/L_DieselNet')}>Diesel Net</Button>
                    <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=> history.push('/L_SuperNet')}>Super Net</Button>

                </Card>
                </div>
                </div>
                </div>
            
        
    );
}

export default GraphLanding;









