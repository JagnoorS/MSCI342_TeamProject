import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"


const Landing = () =>  {

    return (
        <div>
            <Typography variant = 'h3' colors = 'black' >
                Welcome to JavaScriptJatt's FuelFlex landing page
            </Typography>

            <Typography variant = 'h5' colors = 'darkblue' >
                Navigate to log in page to access user features
            </Typography>

            <Typography variant = 'h6' colors = 'darkblue' >
                If you are a non employee click the button below
            </Typography>


        </div>
        
    );
}

export default Landing;