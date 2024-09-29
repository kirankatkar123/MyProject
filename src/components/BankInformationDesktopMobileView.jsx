import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  useMediaQuery, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
const BankInformationDesktopMobileView = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screen
  
    const data = [
      { id: 1, bankname: 'HDFC Bank', bankaccountno: '0121005020897',  bankbranch: 'Prabhadevi', bankifscode: 'HDFC000012',accounttype: 'Saving',bnakmicrcode: '110002022' },
      { id: 2, bankname: 'HDFC Bank', bankaccountno: '0121005020897',  bankbranch: 'Prabhadevi', bankifscode: 'HDFC000012',accounttype: 'Saving',bnakmicrcode: '110002022' },
      { id: 3, bankname: 'HDFC Bank', bankaccountno: '0121005020897',  bankbranch: 'Prabhadevi', bankifscode: 'HDFC000012',accounttype: 'Saving',bnakmicrcode: '110002022' }
    
    ];
  return (
    <>
    {isMobile ? (
      <Grid container spacing={2}>
        {data.map((item) => (
<>
<Grid className="minhegt30"  size={{  xs: 12, sm: 12,  md: 12, lg: 12, }}  key={item.id}>
<h4 >Bank Sr. No. {item.id}</h4>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Bank Name</p>
<label className='lbltxt'>{item.bankname}</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Bank Account Number</p>
<label className='lbltxt'>{item.bankaccountno}</label>
</Grid>


<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Bank Branch</p>
<label className='lbltxt'>{item.bankbranch}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Bank IFSC Code</p>
<label className='lbltxt'>{item.bankifscode}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Account Type</p>
<label className='lbltxt'>{item.accounttype}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Bank MICR Code</p>
<label className='lbltxt'>{item.bnakmicrcode}</label>
</Grid>
 

</>
       
        ))}
      </Grid>
    ) : (
      <TableContainer component={Paper}>
        <Table className='maintabldata'>
          <TableHead>
            <TableRow>
            <TableCell>Bank Sr. No.</TableCell>
              <TableCell>Bank Name</TableCell>
              <TableCell>Bank Account Number</TableCell>
              <TableCell>Bank Branch</TableCell>
              <TableCell>Bank IFSC Code</TableCell>
              <TableCell>Account Type</TableCell>
              <TableCell>Bank MICR Code</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell><b>{row.id}</b></TableCell>
                <TableCell>{row.bankname}</TableCell>
                <TableCell>{row.bankaccountno}</TableCell>
                <TableCell>{row.bankbranch}</TableCell>
                <TableCell>{row.bankifscode}</TableCell>
                <TableCell>{row.accounttype}</TableCell>
                <TableCell>{row.bnakmicrcode}</TableCell>
             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </>
  )
}

export default BankInformationDesktopMobileView