import React from 'react';
import { Typography, CardContent, Card, CardMedia, Grid, IconButton, Box } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import coder from './../assets/coder.gif';

export default function About(props) {

    const { scroll } = props;

    return(
      <div id="about" >
        <Typography variant="h2" style={{ flex:1, textAlign: 'center' }} >About</Typography>
        <Grid container direction='row' justify='center' spacing={3} >
            <Grid item sm={12} md={12} style={{ marginTop: '38px' }} >
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
            <Grid item sm={0} md={4}>
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
            <Grid item sm={0} md={12}></Grid>
            <Grid item sm={0} md={12}></Grid>
            <Grid item sm={0} md={12}></Grid>
            <Grid item sm={0} md={12}></Grid>
            <Grid item sm={0} md={12}></Grid>
            <Grid item xs={12}></Grid>
        </Grid>
      </div>
    );
}