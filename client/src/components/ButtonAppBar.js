import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    fontColor: 'white',
    marginLeft: '1%',
    marginRight: '1%' 
  }
}));

const white = '#FFF'

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/home" className={classes.link}>
            <Button variant="contained" color="secondary">Home</Button>
          </Link>
          <Link to="/users" className={classes.link}>
            <Button variant="contained" color="secondary">Users</Button>
          </Link>
          <Link to="/mushrooms" className={classes.link}>
            <Button variant="contained" color="secondary">Mushrooms</Button>
          </Link>
          <Link to="/login" className={classes.link}>
            <Button variant="contained" color="secondary">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
