import React, { lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from './sidebar';
import About from './about';
import { Grid } from '@material-ui/core';

const Skills = lazy(() => import('./skills'));
const Contact = lazy(() => import('./contact'));
const Projects = lazy(() => import('./projects'));

const drawerWidth = 325;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: '#FF6666'
  },
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
      <Grid item xs={12} >
          <SideBar scroll={ (id) => scrollToTag(id) } />
      </Grid>
      <Grid item xs={12} className={classes.content}>
            <About scroll={ (id) => scrollToTag(id) } ></About>
            <Suspense fallback={<div></div>} >
              <Skills scroll={ (id) => scrollToTag(id) } ></Skills>
              <Projects scroll={ (id) => scrollToTag(id) } ></Projects>
              <Contact scroll={ (id) => scrollToTag(id) } ></Contact>
            </Suspense>
      </Grid>
    </Grid>
  );
}
