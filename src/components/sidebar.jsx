import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid, Card, Avatar, IconButton, SvgIcon, Box } from '@material-ui/core';
import profilepic from './../assets/pic.jpg';
import { ReactComponent as github } from './../assets/github.svg';
import { ReactComponent as linkedin } from './../assets/linkedin.svg';
import { ReactComponent as twitter } from './../assets/twitter.svg';

const drawerWidth = 325;

const useStyles = makeStyles((theme) => ({
  drawer: {
    minWidth: drawerWidth,
    minHeight: '100vh',
    marginLeft: 25,
    opacity: 1,
    backgroundColor: "#FF6666",
    position: "fixed",
    [theme.breakpoints.down('sm')] : {
      minWidth: '100%',
      width: '100%',
      minHeight: '100vh',
      marginLeft: '0px',
      marginRight: '0px',
      position: 'unset',
    },
  },
}));

export default function SideBar(props) {
  const classes = useStyles();
  const { scroll } = props;
 
  return (
    <div >
      <Card
        className={classes.drawer}
        variant="elevation" >
        <div className={classes.toolbar} />
        <Box align='center' >
          <Avatar style={{ height: '160px', width: '160px', 
              marginTop: '30px', marginBottom: '30px' }} 
              src={ profilepic } >
          </Avatar>
        </Box>   
        <Typography style={{ marginBottom:'18px', fontSize: '24px', textAlign: "center" }} > Ajay Krishna KV </Typography>
        <Divider style={{ marginBottom: '0px' }} />

        <ListItem button divider >
          <ListItemText primary={'About'} align="center" onClick={ function() { scroll('about') } } />
        </ListItem>
        <ListItem button divider >
          <ListItemText primary={"What I'm good at"} align="center" onClick={ function() {scroll('skills')} } />
        </ListItem>
        <ListItem button divider >
          <ListItemText primary={'My Work'} align="center" onClick={ function() {scroll('projects')} } />
        </ListItem>
        <ListItem button divider >
          <ListItemText primary={'Contact Me'} align="center" onClick={ function() {scroll('contact')} } />
        </ListItem>

        <Grid container style={{ marginTop: '30px' }} spacing={1} justify="center" >
          <Grid item xs={3} ></Grid>
          <Grid item xs={2} >
            <a href="https://www.linkedin.com/in/ajay-krishna-k-v-4b8851193" target="_blank" rel="noopener noreferrer" >
              <IconButton>
                    <SvgIcon component={linkedin}>
                    </SvgIcon>
                </IconButton>
            </a>
          </Grid>
          <Grid item xs={2} >
            <a href="https://github.com/AJAYK-01" target="_blank" rel="noopener noreferrer" >
              <IconButton>
                    <SvgIcon component={github}>
                    </SvgIcon>
                </IconButton>
            </a>
          </Grid>
          <Grid item xs={2} >
            <a href="https://twitter.com/ajayk_kv_" target="_blank" rel="noopener noreferrer" >
              <IconButton>
                    <SvgIcon component={twitter}>
                    </SvgIcon>
                </IconButton>
            </a>
          </Grid>
          <Grid item xs={3} ></Grid>
        </Grid>
        
      </Card>
    </div>
  );
}
