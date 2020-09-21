import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import SideBar from './sidebar';
import About from './about';
import Skills from './skills';
import Contact from './contact';
import Projects from './projects';
import { Grid } from '@material-ui/core';

const drawerWidth = 325;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: '#FF6666'
  },
  // appBar: {
  //   width: `calc(100% - ${drawerWidth}px - 25px)`,
  //   height: 64,
  //   marginLeft: drawerWidth+25,
  //   background: "transparent",
  //   boxShadow: 'none'
  // },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginLeft: `${drawerWidth+25}px`,
    marginRight: '25px',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    opacity: 0.95,
    [theme.breakpoints.down('sm')] : {
      minWidth: '100%',
      minHeight: '0%',
      marginLeft: '0px',
      marginRight: '0px',
      padding: theme.spacing(2),
      position: 'unset',
    },
  },
}));

export default function Template() {
  const classes = useStyles();
  
  const scrollToTag = (id) => {
    if(id==="top")
      window.scrollTo( {left: 0, top: 0, behavior: 'smooth'} );
    else
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" align="left"  style={{ flex:1, color: 'black', opacity: 1 }}>
            Selected Tab
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Grid item xs={12} >
          <SideBar scroll={ (id) => scrollToTag(id) } />
      </Grid>
      <Grid item xs={12} className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
            <About scroll={ (id) => scrollToTag(id) } ></About>
            <Skills scroll={ (id) => scrollToTag(id) } ></Skills>
            <Projects scroll={ (id) => scrollToTag(id) } ></Projects>
            <Contact ></Contact>
      </Grid>
    </Grid>
  );
}
