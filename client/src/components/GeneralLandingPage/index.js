import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"


const GeneralLandingPage = () =>  {

    return (
        <div>
            <Typography variant = 'h3' colors = 'black' >
                Welcome to FuelFlex
            </Typography>

            <Typography variant = 'h5' colors = 'darkblue' >
                Click log in to access our features
            </Typography>

            <Typography variant = 'h6' colors = 'darkblue' >
                Here are your immediate messages:
            </Typography>


        </div>
        
    );
}

export default GeneralLandingPage;