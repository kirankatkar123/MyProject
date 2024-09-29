import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';
import TopBar from './TopBar';
import Grid from '@mui/material/Grid2';
 
import NomineeDetails from './NomineeDetails';
import PrimaryDetails from './PrimaryDetails';
import OtherInformation from './OtherInformation';
import NomineeDetailsAdd from './NomineeDetailsAdd';
 


const steps = ['Primary Details', 'Nominee Details', 'Other Details'];

function SubscriptionView() {
  
  const [activeStep, setActiveStep] = useState(0);

  // Handlers to navigate steps
  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);
  const handleReset = () => setActiveStep(0);

  // Static information for each step
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
            <>
            
       <PrimaryDetails></PrimaryDetails>

            </>
        )
      case 1:
        return (
            <>
               <NomineeDetailsAdd></NomineeDetailsAdd>
            </>
        )
      case 2:
        return (
            <>
          <OtherInformation></OtherInformation>
            </>
        )
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ width: '100%'}}>
        <>
        <TopBar></TopBar>
        </>
        <Box className="maincontent">
   
      <Grid container spacing={2} className="whitecolorbg">
      <Grid minHeight={20}  size={{  xs: 12, sm: 12,  md: 12, lg: 12, }} >
      <h2 className='headingtop'>Subscription</h2>
        </Grid>
      <Stepper activeStep={activeStep} sx={{ width: '100%' }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ marginTop: 4 }}    style={{width: '100%'} } >
        {activeStep === steps.length ? (
          <Box >
            
            <Typography>All steps completed!</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        ) : (
          <Box>
            
            <Typography sx={{ marginBottom: 2 }}>{getStepContent(activeStep)}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
        
      </Grid>
      </Box>
      
    </Box>
  );
}

export default SubscriptionView;
