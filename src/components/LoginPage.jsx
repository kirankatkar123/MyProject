import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box,  Paper } from '@mui/material';
import leftimage from '../images/leftimg.png';
import LoginHeader from './LoginHeader';
import MyButton from '../FormComponent/MyButton';
import Footer from './Footer';
import Grid from '@mui/material/Grid2';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const gotodashboard = () => {
    navigate('/dashboard');
  };
  const goToLoginMobile = () => {
    navigate('/loginmobile');
  };

  return (
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
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <MyButton label="Sign In" onClick={gotodashboard} />
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
            <Grid container className='center'>
              <Grid item xs>
                <Button href="#" variant="text" size="small" className='textnorm'  onClick={goToLoginMobile}>
                <b>Login With Mobile No. </b>
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
  );
};

export default LoginPage;
