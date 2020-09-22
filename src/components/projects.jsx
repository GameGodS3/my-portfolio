import React from 'react';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ktunotif from './../assets/ktunotif.jpg'
import easyassign from './../assets/easyassign.png';
import monitor from './../assets/monitor.png';
import gocorona from './../assets/gocorona.png';

export default function Projects(props) {

    const { scroll } = props;

    return(
        <div id="projects" style={{ marginTop: '50px' }} >
            <Typography variant="h2" align='left' style={{ flex:1, textAlign: 'center' }} >My Work</Typography>
            <Grid container justify='center' spacing={2} style={{ marginTop: '1px' }} >
                <Grid item sm={12} md={6} >
                    <Card >
                        <CardHeader title={"Easy Notes"} action={
                            <Avatar src={easyassign} ></Avatar>
                        } ></CardHeader>
                        <CardContent>
                            <Typography>
                                An Android app for easy notes sharing, including  
                                separate account profiles for sharers and viewers 
                                with Realtime cloud based push notifcations. {<br />}
                                Built using Flutter mobile app framework and Firebase serverless backend.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => window.open('https://github.com/AJAYK-01/EasyAssignments', '_blank')} 
                                size='small' style={{ color: '#FF6666' }} >
                                <Typography variant='subtitle2' >Project Link</Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={12} md={6} >
                    <Card style={{ height: '100%' }} >
                        <CardHeader title={"KTU Notifier"} action={
                            <Avatar src={ktunotif} ></Avatar>
                        } ></CardHeader>
                        <CardContent>
                            <Typography>
                                A Telegram Bot that gives Live Notifications from the 
                                Ktu's announcements page through DM's. {<br />}
                                Uses Webscraping and Telgram Bot Api in Python and a Firebase Database.
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button onClick={() => window.open('https://github.com/AJAYK-01/KTU-Notifier', '_blank')} 
                                size='small' style={{ color: '#FF6666' }} >
                                <Typography variant='subtitle2' >Project Link</Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={12} md={6} >
                    <Card style={{ height: '100%'}} >
                        <CardHeader title={"moniTOR"} action={
                            <Avatar src={monitor} ></Avatar>
                        } ></CardHeader>
                        <CardContent>
                            <Typography>
                                A smart dark web monitoring tool built for Hac'KP international
                                online hackathon. {<br />}
                                Uses webscraping, asynchronous programming, and tor, and built using
                                Python and Django. 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => window.open('http://monitor.hackp.cyberdome.org.in', '_blank')} 
                                size='small' style={{ color: '#FF6666' }} >
                                <Typography variant='subtitle2' >Project Link</Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={12} md={6} >
                    <Card >
                        <CardHeader title={"Go Corona"} action={
                            <Avatar src={gocorona} ></Avatar>
                        } ></CardHeader>
                        <CardContent>
                            <Typography>
                                An android 2D shooting game that lets you shoot corona and chants
                                'go corona' on killing them, intended as a Meme. {<br />}
                                Built using the Flame game engine and Flutter mobile app framework.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => window.open('https://github.com/AJAYK-01/Go-Corona-Meme', '_blank')}
                                size='small' style={{ color: '#FF6666' }} >
                                <Typography variant='subtitle2' >Project Link</Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Box border={1} borderColor='black' borderRadius='50%' >
                    <IconButton onClick={ () => scroll("contact") } >
                        <KeyboardArrowDownIcon style={{  
                            fontSize: '30px', color: 'black'
                        }} ></KeyboardArrowDownIcon>
                    </IconButton>
                </Box>
            </Grid>
        </div>
    );
}