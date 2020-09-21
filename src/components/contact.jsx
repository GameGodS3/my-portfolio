import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';



export default function Contact(props) {

    const [name , setName] = useState('');
    const [contact , setContact] = useState('');
    const [topic , setTopic] = useState('');
    const [msg , setMsg] = useState('');

    const submitForm = () => {

        const message = encodeURI(msg);
        const botId = 'YOUR TELEGRAM BOT ID';
        const chatId = 'YOUR TELEGRAM CHAT ID';
        fetch("https://api.telegram.org/bot"+botId+"/"+
        "sendMessage?chat_id="+chatId+"&"+
        "text="+name+'%0A'+contact+'%0A'+topic+'%0A'+message).then(
        () => window.location.reload(false) );
    }

    return(
        <div id="contact" style={{ marginTop: '50px' }} >
            <Typography variant="h2" align='left' 
                style={{ flex:1, textAlign: 'center', marginBottom: '30px' }} >Contact Me</Typography>
            <Grid container justify='center' spacing={3} >
                <Grid item xs={12} sm={12} md={6}>
                    <TextField type="text" variant='outlined' onChange={ (x) => setName(x.target.value) }
                        fullWidth label='Your Name' ></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField type="text" variant='outlined' onChange={ (x) => setContact(x.target.value) }
                        fullWidth label='Contact Email/Phone' ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="text" variant='outlined' onChange={ (x) => setTopic(x.target.value) }
                        fullWidth label='Subject' ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="text" variant='outlined' multiline rows={8} onChange={(x) => setMsg(x.target.value)}
                        fullWidth label='Message' ></TextField>
                </Grid>   
                <Button style={{backgroundColor: '#FF6666', color:'white', marginTop:'15px' }}
                    onClick={ submitForm }  >Send Message</Button>
            </Grid>
        </div>
    );
};