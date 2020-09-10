import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Grid, Card, Avatar, IconButton, SvgIcon } from '@material-ui/core';
import profilepic from './../assets/pic.jpg';
import { ReactComponent as github } from './../assets/github.svg';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px - 25px)`,
    height: 64,
    marginLeft: drawerWidth+25,
    backgroundColor: "white"
  },
  drawer: {
    minWidth: drawerWidth,
    minHeight: '100vh',
    marginLeft: 25,
  },
  drawerPaper: {
    minWidth: drawerWidth,
    minHeight: '100vh',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" variant="outlined" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" align="left"  style={{ flex:1, color: "black" }}>
            Selected Tab
          </Typography>
          <IconButton>
              <SvgIcon component={github}>
              </SvgIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Card
        className={classes.drawer}
        variant="elevation"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />        
        <Avatar style={{ height: '160px', width: '160px', 
            margin: `${(drawerWidth-160)/2}px`, marginTop: '-34px', marginBottom: '30px' }} 
            src={ profilepic } >
        </Avatar>
        <Divider />
        <List>
          {['About', 'Projects', 'Skills'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Card>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. 
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. 
        </Typography>
      </main>
    </div>
  );
}
