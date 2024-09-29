import * as React from 'react';
 import Box from '@mui/material/Box';
 import { Container, TextField, Button, Typography, Paper} from '@mui/material';
 import leftimage from '../images/leftimg.png';
 import LoginHeader from './LoginHeader';
 import MyButton from '../FormComponent/MyButton';
 import Footer from './Footer';
 import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid2';

 
export const LandingPage = () => {
    const navigate = useNavigate();

    const goToUSer = () => {
      navigate('/login');
    };
  //   const goToOTP = () => {
  //     navigate('/otp');
  //   };
  const goToLoginMobile = () => {
      navigate('/loginmobile');
    };
  return (
    <div>
          <Container component="main" maxWidth="md" >
            <LoginHeader></LoginHeader>
          <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
        <img src={leftimage} className='leftimg' alt="leftimage" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
        <div className='center'>
          <h3>Client Login</h3><p>Take your first step towards getting Wealthy</p>
          </div>
          <Box component="form"  noValidate sx={{ mt: 3 }}>
          <MyButton label="Login with Mobile No."  onClick={goToLoginMobile} />
          <MyButton label="Login with User ID" type="submit" onClick={goToUSer}></MyButton>
          
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
          </Box>
        </Grid>
         
      </Grid>
    </Box>
    </Paper>
    </Container>
    <Footer></Footer>
    </div>
  )
}

export default LandingPage;