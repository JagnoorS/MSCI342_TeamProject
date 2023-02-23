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
                Use the log in box below to select who you are logging in as
            </Typography>

            <Typography variant = 'h6' colors = 'darkblue' >
                If you are looking to apply to work at our stations follow the link below
            </Typography>


        </div>
        
    );
}

export default Landing;