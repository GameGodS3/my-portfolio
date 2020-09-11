import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid, Card, Avatar, IconButton, SvgIcon } from '@material-ui/core';
import profilepic from './../assets/pic.jpg';
import { ReactComponent as github } from './../assets/github.svg';
import { ReactComponent as linkedin } from './../assets/linkedin.svg';
import { ReactComponent as twitter } from './../assets/twitter.svg';

const drawerWidth = 310;

const useStyles = makeStyles((theme) => ({
  drawer: {
    minWidth: drawerWidth,
    minHeight: '100vh',
    marginLeft: 25,
    opacity: 1,
    backgroundColor: "#FF6666",
    position: "fixed",
  },
  drawerPaper: {
    minWidth: drawerWidth,
    minHeight: '100vh',
    marginLeft: 25,
    opacity: 0.8
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div >
      <Card
        className={classes.drawer}
        variant="elevation"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />        
        <Avatar style={{ height: '160px', width: '160px', 
            margin: `${(drawerWidth-160)/2}px`, marginTop: '30px', marginBottom: '30px' }} 
            src={ profilepic } >
        </Avatar>
        <Typography style={{ marginBottom:'18px', fontSize: '24px', textAlign: "center" }} > Ajay Krishna KV </Typography>
        <Divider style={{ marginBottom: '-8px' }} />
        <List>
          {['About', "What I'm good at", 'My Work'].map((text, index) => (
            <ListItem button key={text} divider >
              <ListItemText primary={text} align="center" />
            </ListItem>
          ))}
        </List>
        <Grid container xs={12} style={{ marginTop: '30px' }} spacing={1} justify="center" >
          <Grid item xs={2} >
            <a href="https://www.linkedin.com/in/ajay-krishna-k-v-4b8851193" target="_blank">
              <IconButton>
                    <SvgIcon component={linkedin}>
                    </SvgIcon>
                </IconButton>
            </a>
          </Grid>
          <Grid item xs={2} >
            <a href="https://github.com/AJAYK-01" target="_blank">
              <IconButton>
                    <SvgIcon component={github}>
                    </SvgIcon>
                </IconButton>
            </a>
          </Grid>
          <Grid item xs={2} >
            <a href="https://twitter.com/ajayk_kv_" target="_blank">
              <IconButton>
                    <SvgIcon component={twitter}>
                    </SvgIcon>
                </IconButton>
            </a>
          </Grid>
        </Grid>
        
      </Card>
    </div>
  );
}
