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
                            Welcome to your Store and Gas Sales data visualization portal
                        </Typography>
                    <div>
                    <Card style={{width:'1000px', height: '225px', backgroundColor:'#8B8B8B'}}>
                        <Typography variant='h3' style={{color:'white', marginTop:'15px'}}>
                            Select which sales data to visualize
                        </Typography>
                        <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=>history.push('/StoresSAlesData')}>Store Sales Visualizations</Button>
                        <Button variant="contained" style={{color: 'black', background: 'silver', marginRight: '30px', marginTop:'30px'}} size='large' onClick= {()=>  history.push('/GasDataLanding')}>Gas Sales Visualizations</Button>
                    </Card>
                    </div>

                </div>
                </div>

    );
}

export default GraphLanding;