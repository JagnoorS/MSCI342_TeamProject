import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"


const NonEmployeePage = () =>  {

    return (
        <div>
            <Typography variant = 'h3' colors = 'black' >
                Welcome
            </Typography>

            <Typography variant = 'h5' colors = 'darkblue' >
                If you wish to apply to work at one of our locations click here
            </Typography>

            <Typography variant = 'h6' colors = 'darkblue' >
                If you want to submit feedback enter it here
            </Typography>
            <Typography variant = 'h6' colors = 'darkblue' >
                If you want to submit a complaint enter it here
            </Typography>


        </div>
        
    );
}

export default NonEmployeePage;