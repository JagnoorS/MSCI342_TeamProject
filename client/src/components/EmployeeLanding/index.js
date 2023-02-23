import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
// import Link from "@material-ui/core/Link";
import history from "../Navigation/history"


const EmployeeLanding = () =>  {

    return (
        <div>
            <Typography variant = 'h3' colors = 'black' >
                Welcome ""INSERT EMPLOYEE NAME"" to your landing page
            </Typography>

            <Typography variant = 'h5' colors = 'darkblue' >
                Use the navigation bar to switch to your other pages
            </Typography>

            <Typography variant = 'h6' colors = 'darkblue' >
                Here are your immediate messages:
            </Typography>


        </div>
        
    );
}

export default EmployeeLanding;