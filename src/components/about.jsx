import React from 'react';
import { Typography,  Card, CardMedia, Grid, IconButton, Box, Avatar } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import coder from './../assets/coder.gif';
import resume from './../assets/resume.png';
import pdf from './../assets/resume.pdf'

export default function About(props) {

    const { scroll } = props;

    return(
      <div id="about" >
        <Typography variant="h2" style={{ flex:1, textAlign: 'center' }} >About</Typography>
        <Grid container direction='row' justify='center' spacing={3} >
            <Grid item sm={12} md={9} style={{ marginTop: '38px', color: 'black' }} >
                {/* <Card  >
                    <CardContent > */}
                        <Typography style={{ fontSize: '25px' }}>
                           - cs student at college of engineering tvm.
                        </Typography>
                        <Typography style={{ fontSize: '25px' }}>
                           - tech enthusiast and crazy motorhead.
                        </Typography>
                        <Typography style={{ fontSize: '25px' }}>
                           - frontend mobile and web developer.
                        </Typography>
                        <Typography style={{ fontSize: '25px' }}>
                           - i love open source!!
                        </Typography>
                        <Typography style={{ fontSize: '25px' }}>
                           - currently working on Ceekyoo search engine project.
                        </Typography>
                    {/* </CardContent>
                </Card> */}
            </Grid>
            <Grid item sm={12} md={3} style={{ marginTop: '30px', color: 'black' }} >
                <IconButton onClick={ () => window.open(pdf, '_blank') } >
                    <Avatar src={resume} style={{ height: '140px', width: '140px' }} />
                </IconButton>
                <Typography style={{marginLeft: '25px', fontSize: '18px'}} >View Resume</Typography>
            </Grid>
            <Grid item sm={false} md={4}>
                <Card>
                    <CardMedia style={{ height: '180px' }} image={coder} ></CardMedia>
                </Card>
            </Grid>
            <Grid item xs={12}></Grid>
            <Box border={1} borderColor='black' borderRadius='50%' >
                <IconButton onClick={ () => scroll("skills") } >
                    <KeyboardArrowDownIcon style={{  
                        fontSize: '30px', color: 'black'
                    }} ></KeyboardArrowDownIcon>
                </IconButton>
            </Box>
            <Grid item sm={false} md={12}></Grid>
            <Grid item sm={false} md={12}></Grid>
            <Grid item sm={false} md={12}></Grid>
            <Grid item sm={false} md={12}></Grid>
            <Grid item sm={false} md={12}></Grid>
            <Grid item xs={12}></Grid>
        </Grid>
      </div>
    );
}