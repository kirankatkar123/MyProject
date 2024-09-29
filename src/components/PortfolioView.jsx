
import React, { useState } from 'react';
import { Button, Collapse} from '@mui/material';
import { styled } from '@mui/material/styles';
import speedometer from '../images/speedometer.png';
import Paper from '@mui/material/Paper';
 
import VerifiedIcon from '@mui/icons-material/Verified';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

import TopBar from './TopBar'
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import NomineeDesktopMobileView from './NomineeDesktopMobileView';
import BankInformationDesktopMobileView from './BankInformationDesktopMobileView';
const PortfolioView = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };
    const handleToggle2 = () => {
      setOpen2(!open2);
    };
    const handleToggle3 = () => {
      setOpen3(!open3);
    };
    const handleToggle4 = () => {
      setOpen4(!open4);
    };
    const handleToggle5 = () => {
      setOpen5(!open5);
    };
    const handleToggle6 = () => {
      setOpen6(!open6);
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
 
     
      }));
  return (
    <div>
       <TopBar></TopBar>
       <>
       <Box className="maincontent">
    
      <Grid container spacing={2} className="whitecolorbg">
        
      <Grid minHeight={20}  size={{  xs: 12, sm: 12,  md: 12, lg: 12, }} >
      <h2 className='headingtop'>Portfolio View</h2>
        </Grid>
   
         <Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
         <p>Portfolio Investor/Client(L3) Name </p>
         <label className='lbltxt'>Ramakant Rajan More</label>
           </Grid>

           <Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
         <p>UCC of Client(L3)	</p>
         <label className='lbltxt'>AMD6090</label>
           </Grid>


           <Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
         <p>Account(L4)/Portfolio Code</p>
         <label className='lbltxt'>100076/G12</label>
           </Grid>


           <Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
         <p>Portfolio Type</p>
         <label className='lbltxt'>Executionary</label>
           </Grid>

           <Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
         <p>KYC Complaint status</p>
         <label className='lbltxt'>  Verified  <VerifiedIcon color="success" className='successicon' /></label>
           </Grid>
           
           <Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
         <p>FATCA Compliant Status</p>
         <label className='lbltxt'>  Not Applicable  <DoNotDisturbIcon  className='successicon notappicon' /></label>
           </Grid>
           <Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
         <p>Risk Profile</p>
         <label className='lbltxt'>  Conservative  <img src={speedometer} className='spedometor' alt="leftimage" /></label>
           </Grid>
     
           <Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
         <p>Mode of Operation</p>
         <label className='lbltxt'> Single</label>
           </Grid>
     
        <Grid size={{ xs: 12, md: 12 }}>
         
          <div>
        <div className='pdb20'>
            <span className='subtitle'>Personal Details
            </span>
            <span><span variant="contained" className='buttonplus' onClick={handleToggle}>
        {open ? "-" : "+"}
      </span></span>
        </div>
      
      <Collapse in={open}>
      <Box >
<Grid container spacing={2} >
 
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Date of Birth  </p>
<label className='lbltxt'>11-Aug-1986</label>
</Grid>
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>PAN  </p>
<label className='lbltxt'>HHHDF32K</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Aadhaar  </p>
<label className='lbltxt'>34345432423</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Gender  </p>
<label className='lbltxt'>Male</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Nationality  </p>
<label className='lbltxt'>Indian</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Passport  </p>
<label className='lbltxt'>345345435</label>
</Grid>
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Marital Status  </p>
<label className='lbltxt'>Married</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Occupation </p>
<label className='lbltxt'>Salaried Person</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Wedding Date </p>
<label className='lbltxt'>15-Aug-2013</label>
</Grid>


   </Grid>
</Box>
       
      </Collapse>
    </div>
        
        </Grid>


        <Grid size={{ xs: 12, md: 12 }}>
         
         <div>
         <div className='pdb20'>
       <span className='subtitle'>Bank Details 
           </span>
           <span><span variant="contained" className='buttonplus' onClick={handleToggle2}>
       {open2 ? "-" : "+"}
     </span></span>
       </div>
     
     <Collapse in={open2}>
     <Box >
      <BankInformationDesktopMobileView></BankInformationDesktopMobileView>
 
</Box>
       
     </Collapse>
   </div>
       
       </Grid>


       <Grid size={{ xs: 12, md: 12 }}>
         
         <div>
         <div className='pdb20'>
       <span className='subtitle'>Contact Details 
           </span>
           <span><span variant="contained" className='buttonplus' onClick={handleToggle3}>
       {open3 ? "-" : "+"}
     </span></span>
       </div>
     
     <Collapse in={open3}>
     <Box >
<Grid container spacing={2} >
 
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Mobile Number</p>
<label className='lbltxt'>9765554432</label>
</Grid>
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Alternate Mobile Number </p>
<label className='lbltxt'>8777766554</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Email ID </p>
<label className='lbltxt'>Raj@gmail.com</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Alternate Email ID </p>
<label className='lbltxt'>vijay@gmail.com</label>
</Grid>
 
 


   </Grid>
</Box>
      
     </Collapse>
   </div>
       
       </Grid>


       <Grid size={{ xs: 12, md: 12 }}>
         
         <div>
        <div className='pdb20'>
       <span className='subtitle'>Nominee Details

           </span>
           <span><span variant="contained" className='buttonplus' onClick={handleToggle4}>
       {open4 ? "-" : "+"}
     </span></span>
       </div>
     
     <Collapse in={open4}>
     <Box >
<Grid container spacing={2} >
 <NomineeDesktopMobileView></NomineeDesktopMobileView>
{/*  
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee Name</p>
<label className='lbltxt'>Amar Jyot Singh</label>
</Grid>
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee PAN</p>
<label className='lbltxt'>AAADF5623A</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee DOB </p>
<label className='lbltxt'>23-Dec-1967</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Sharing Percent </p>
<label className='lbltxt'>100%</label>
</Grid>
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee Relationship</p>
<label className='lbltxt'>Father</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee Mobile</p>
<label className='lbltxt'>6666554433</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee Email ID</p>
<label className='lbltxt'>amarjyot@gmail.com</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Gaurdian Name	</p>
<label className='lbltxt'>Shivaraj Ray Saini</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Gaurdian DOB	</p>
<label className='lbltxt'>22-Sep-1972</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Gaurdian Relationship</p>
<label className='lbltxt'>Uncle</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Gaurdian PAN</p>
<label className='lbltxt'>SSSDF4321K</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Gaurdian Email ID</p>
<label className='lbltxt'>ShivrajSi@gmail.com</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Gaurdian Mobile</p>
<label className='lbltxt'>9988665522</label>
</Grid> */}



   </Grid>
</Box>
      
     </Collapse>
   </div>
       
       </Grid>


       <Grid size={{ xs: 12, md: 12 }}>
         
         <div>
         <div className='pdb20'>
       <span className='subtitle'>RM Details

           </span>
           <span><span variant="contained" className='buttonplus' onClick={handleToggle5}>
       {open5 ? "-" : "+"}
     </span></span>
       </div>
     
     <Collapse in={open5}>
     <Box >
<Grid container spacing={2} >
 
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>RM Name</p>
<label className='lbltxt'>Devendra Shah</label>
</Grid>
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>RM-1 ARN </p>
<label className='lbltxt'>ARN-00786</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>RM Mobile Number</p>
<label className='lbltxt'>6665544421</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>RM Email ID</p>
<label className='lbltxt'>devendraSh@gmail.com</label>
</Grid>
 
 


   </Grid>
</Box>
     </Collapse>
   </div>
       
       </Grid>


       <Grid size={{ xs: 12, md: 12 }}>
         
         <div>
         <div className='pdb20'>
       <span className='subtitle'>Other Details
           </span>
           <span><span variant="contained" className='buttonplus' onClick={handleToggle6}>
       {open6 ? "-" : "+"}
     </span></span>
       </div>
     
     <Collapse in={open6}>
     <Box >
<Grid container spacing={2} >
 
 
<Grid className="minhegt50" size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Fund accounting applicable</p>
<label className='lbltxt'>Yes</label>
</Grid>
 
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }} >
<p>Goals Linked </p>
<label className='lbltxt'>Retirement, Marriage, Child Education, Travel, Car
</label>
</Grid>
 
 
 


   </Grid>
</Box>
      
     </Collapse>
   </div>
       
       </Grid>


       
      </Grid>
    </Box>
      
    </>

    </div>

  )
}

export default PortfolioView