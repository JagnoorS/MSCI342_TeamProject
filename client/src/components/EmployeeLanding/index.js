import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Button from '@mui/material/Button';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"
import './index.css';


const EmployeeLanding = () =>  {

    const style={
        backgroundImage: "url(https://hips.hearstapps.com/hmg-prod/images/2022-gmc-sierra-denali-117-1634754650.jpg?crop=0.782xw:0.700xh;0.219xw,0.226xh&resize=1200:*)",
        height: '100vh',
        marginTop:'0px',
        fontsize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style={style}>
            
            
            <Typography variant = 'h3' colors = 'black' >
                Welcome ""INSERT EMPLOYEE NAME"" to your landing page
            </Typography>

            <Typography variant = 'h5' colors = 'darkblue' >
                Use the navigation bar to switch to your other pages
            </Typography>

            <Typography variant = 'h6' colors = 'darkblue' >
                Here are your immediate messages:
            </Typography>
            <Button colors = "inherit" onClick= {()=> history.push('/SalesEntry')}>Sales Entry</Button>
        


        </div>
        
    );
}

export default EmployeeLanding;