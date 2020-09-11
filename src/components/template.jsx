import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import SideBar from './sidebar';
import About from './about';
import Skills from './skills';
import Projects from './projects';

const drawerWidth = 310;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px - 25px)`,
    height: 64,
    marginLeft: drawerWidth+25,
    background: "transparent",
    boxShadow: 'none'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginLeft: `${drawerWidth+25}px`,
    marginRight: '25px',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    opacity: 0.9
  },
}));

export default function Template() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" align="left"  style={{ flex:1, color: 'black', opacity: 1 }}>
            Selected Tab
          </Typography>
        </Toolbar>
      </AppBar> */}
      <SideBar />
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
            <About></About>
            {/* <Skills></Skills>
            <Projects></Projects> */}
      </main>
    </div>
  );
}
