import React from 'react';
import { Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Skills(props) {

    const { scroll } = props;

    return(
        <div id="skills" >
           <Typography variant="h2" align='left' style={{ flex:1, textAlign: 'center' }} >Skills</Typography>
           <Grid container justify='center' spacing={2} style={{ marginTop: '10px', marginBottom: '10px' }} >
                <Grid item sm={12} md={6} style={{ color: 'black' }} >
                <Card >
                        <CardHeader title={"Frontend development"} ></CardHeader>
                        <CardContent>
                            <Typography >
                                Have done quite a few Android app projects using Flutter cross platform framework. <br/>
                                A newbie on web dev, currently learning Javascript and React
                                 (this webpage was made using React). <br/>
                                Currently working on the mobile app for Ceekyoo search engine. 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={12} md={6} style={{ color: 'black' }} >
                <Card style={{ height: '100%' }}>
                        <CardHeader title={"Backend development"} ></CardHeader>
                        <CardContent>
                            <Typography >
                                Worked with Django and Flask. <br/>
                                Designed backend logic for a Dark Web Crawler
                                for Kerla Police Cyberdome's hackathon . <br/>
                                Good experience in Firebase Database management. <br/>
                                Newbie learner to PostgreSQL. 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={false} md={3}></Grid>
                <Grid item sm={12} md={6} style={{ color: 'black' }} >
                    <Card >
                        <CardHeader title={"Programming langs and Tech Stacks known/worked with"} ></CardHeader>
                        <CardContent>
                            <Typography >
                                - Flutter (Mobile app). <br/>
                                - ReactJs (Web). <br/>
                                - Django, Flask (Backend) <br/>
                                - Python. <br/> 
                                - C++. <br/> 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={false} md={3}></Grid>
                <Box border={1} borderColor='black' borderRadius='50%' >
                    <IconButton onClick={ () => scroll("projects") } >
                        <KeyboardArrowDownIcon style={{  
                            fontSize: '30px', color: 'black'
                        }} ></KeyboardArrowDownIcon>
                    </IconButton>
                </Box>
           </Grid>
        </div>
    );
}