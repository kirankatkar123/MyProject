import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, TextField, Button, Typography, Box,  Paper } from '@mui/material';
import leftimage from '../images/leftimg.png';
import LoginHeader from './LoginHeader';
import MyButton from '../FormComponent/MyButton';
import Footer from './Footer';
import Grid from '@mui/material/Grid2';


export const LoginMobile = () => {
    const navigate = useNavigate();

    const [mobile, setMobile] = useState('');
     const goToOTP = () => {
        navigate('/otp');
      };
      const goToUSer = () => {
        navigate('/login');
      };
  return (
    <div>
        <Container component="main" maxWidth="md">
        <LoginHeader/>
      <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <img src={leftimage} alt="leftimage" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
          <div className='center'>
          <h3>Client Login</h3><p>Take your first step towards getting Wealthy</p>
          </div>
            <Box component="form"  noValidate sx={{ mt: 3 }}>
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                type='number'
                fullWidth
                id="mobile"
                label="Enter Mobile No"
                name="mobile"
                autoComplete="mobile"
                autoFocus
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              
            <MyButton label="Send OTP"  onClick={goToOTP}/>
            <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
                <Button href="#" variant="text" size="small" className='textnorm'>
                  Forgot password?
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Button href="#" variant="text" size="small" className='textnorm'>
                  {"Don't have an account? Sign Up"}
                </Button>
                
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs className='center'>
                <Button href="#" variant="text" size="small" className='textnorm' onClick={goToUSer}>
                 <b>Login With User ID </b>
                </Button>
                </Grid>
                </Grid>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Paper>
      <Footer></Footer>
    </Container>
    </div>
  )
}

export default LoginMobile;