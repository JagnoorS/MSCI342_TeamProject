import { Link, Typography } from '@material-ui/core';
import React, { Component } from 'react';
// import Link from "@material-ui/core/Link";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import history from "../Navigation/history"

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  
  export default function DatePickers() {
    const classes = useStyles();
  
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="DATE WORKED"
          type="date"
          defaultValue="2023-02-20"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
  }
  