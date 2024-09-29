import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import leftimage from '../images/leftimg.png';
import LoginHeader from './LoginHeader';
import MyButton from '../FormComponent/MyButton';
import Footer from './Footer';
 

export const Otp = () => {
    const navigate = useNavigate();

    const [mobile, setMobile] = useState('');
     const goToDashboard = () => {
        navigate('/dashboard');
      };

      const [otp, setOtp] = useState('');
      const [timeLeft, setTimeLeft] = useState(60); // Timer starts at 60 seconds
      const [isResendEnabled, setIsResendEnabled] = useState(false);
    
      useEffect(() => {
        if (timeLeft > 0) {
          const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
          }, 1000);
          return () => clearInterval(timerId); // Cleanup timer on component unmount
        } else {
          setIsResendEnabled(true); // Enable the "Resend OTP" button when the timer ends
        }
      }, [timeLeft]);
    
      const handleChange = (e) => {
        setOtp(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`OTP Submitted: ${otp}`);
      };
    
      const handleResend = () => {
        setTimeLeft(60); // Reset the timer
        setIsResendEnabled(false);
        // Logic to resend OTP goes here
        alert('OTP has been resent');
      };
  return (
    <div>
        
        <Container component="main" maxWidth="md">
        <div className='center'>
        <LoginHeader/>
        
          </div>
        <Box
        component="form" className='formotp'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Enter OTP
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          Please enter the 4-digit code sent to your mobile number.
        </Typography>
        <TextField
          value={otp}
          onChange={handleChange}
          variant="outlined"
          placeholder="• • • •"
          inputProps={{ maxLength: 4, style: { textAlign: 'center', letterSpacing: '10px' } }}
          sx={{ mb: 2, width: '100%' }}
        />
        <MyButton label="Submit"  onClick={goToDashboard}/>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          {isResendEnabled
            ? "Didn't receive the code?"
            : `Resend OTP in ${timeLeft} seconds`}
        </Typography>
        <Button
          onClick={handleResend}
          variant="text"
          color="primary"
          disabled={!isResendEnabled}
          sx={{ mt: 1 }}
        >
          Resend OTP
        </Button>
      </Box>
        
   <Footer></Footer>
    </Container>
    
    </div>
  )
}

export default Otp;