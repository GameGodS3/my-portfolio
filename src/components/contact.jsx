import { Box, Button, Grid, IconButton, makeStyles, Snackbar, SnackbarContent, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    textField : {
        borderColor: 'grey !important',
        
    }
}))

export default function Contact(props) {

    const { scroll } = props;
    const textfield = useStyles().textField;

    const [name , setName] = useState('');
    const [contact , setContact] = useState('');
    const [topic , setTopic] = useState('');
    const [msg , setMsg] = useState('');
    const [open, setOpen] = useState(false);

    const submitForm = () => {

        const message = encodeURI(name+'\n'+contact+'\n'+topic+'\n'+msg);
        const botId = 'YOUR BOT ID';
        const chatId = 'YOUR CHAT ID'; 
        fetch("https://api.telegram.org/bot"+botId+"/"+
        "sendMessage?chat_id="+chatId+"&"+"text="+message).then( () => {
            setOpen(true);
            setMsg('');
            setContact('');
            setName('');
            setTopic('');
        } );
    }

    return(
        <div id="contact" style={{ marginTop: '50px' }} >
            <Typography variant="h2" align='left' 
                style={{ flex:1, textAlign: 'center', marginBottom: '30px' }} >Contact Me</Typography>
            <Grid container justify='center' spacing={3} >
                <Grid item xs={12} sm={12} md={6}>
                    <TextField type="text" variant='outlined' onChange={ (x) => setName(x.target.value) }
                        fullWidth label='Your Name' value={name} 
                        InputProps={ { classes: {notchedOutline: textfield} } } ></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField type="text" variant='outlined' onChange={ (x) => setContact(x.target.value) }
                        fullWidth label='Contact Email/Phone' value={contact}
                        InputProps={ { classes: {notchedOutline: textfield} } } ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="text" variant='outlined' onChange={ (x) => setTopic(x.target.value) }
                        fullWidth label='Subject' value={topic} 
                        InputProps={ { classes: {notchedOutline: textfield} } } ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField type="text" variant='outlined' multiline rows={8} onChange={(x) => setMsg(x.target.value)}
                        fullWidth label='Message' value={msg}
                        InputProps={ { classes: {notchedOutline: textfield} } } ></TextField>
                </Grid> 
                <Grid container direction='column' alignItems='center' >
                    <Button style={{backgroundColor: '#FF6666', color:'white', marginTop:'15px', marginBottom: '15px' }}
                        onClick={ submitForm }  >Send Message</Button>
                    <Box border={1} borderColor='black' borderRadius='50%' >
                        <IconButton onClick={ () => scroll("top") } >
                            <KeyboardArrowUpIcon style={{  
                                fontSize: '30px', color: 'black'
                            }} ></KeyboardArrowUpIcon>
                        </IconButton>
                    </Box>
                </Grid>  
            </Grid>
            <Snackbar
                open={open}
                anchorOrigin={
                    { vertical: 'bottom', horizontal: 'right' }
                }
                autoHideDuration={3000}
                onClose={() => setOpen(false) } >
                    <SnackbarContent style={{backgroundColor:'#FF6666'}}
                        message='Message Sent!'
                    />
            </Snackbar>
        </div>
    );
};