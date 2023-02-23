import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"


const Landing = () =>  {

    return (
        <div>
            <Typography variant = 'h3' colors = 'black' >
                Welcome to Jagnoor's movie review webpage
            </Typography>

            <Typography variant = 'h5' colors = 'darkblue' >
                Use the navigation bar at the top of the page to visit your desired page
            </Typography>


        </div>
        
    );
}

export default Landing;