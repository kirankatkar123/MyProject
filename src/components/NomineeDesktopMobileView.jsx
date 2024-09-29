import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  useMediaQuery, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
const NomineeDesktopMobileView = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screen
  
    const data = [
      { id: 1, nomineename: 'Amar Jyot Singh', nomineepan: 'AAADF5623A' , nomineedob: '23-Dec-1967', sharingpercent: '100%', nomineerelationship: 'Father', 
        nomineemobile: '$10', nomineeemail: '6666554433', gaurdianname: 'amarjyot@gmail.com', gaurdiandob: 'Shivaraj Ray Saini', gaurdianrelationship: '22-Sep-1972'
        , gaurdianpan: 'Uncle', gaurdianemail: 'SSSDF4321K', gaurdianmobile: 'ShivrajSi@gmail.com' },
        { id: 2, nomineename: 'Amar Jyot Singh', nomineepan: 'AAADF5623A' , nomineedob: '23-Dec-1967', sharingpercent: '100%', nomineerelationship: 'Father', 
            nomineemobile: '$10', nomineeemail: '6666554433', gaurdianname: 'amarjyot@gmail.com', gaurdiandob: 'Shivaraj Ray Saini', gaurdianrelationship: '22-Sep-1972'
            , gaurdianpan: 'Uncle', gaurdianemail: 'SSSDF4321K', gaurdianmobile: 'ShivrajSi@gmail.com' } ,
            { id: 3, nomineename: 'Amar Jyot Singh', nomineepan: 'AAADF5623A' , nomineedob: '23-Dec-1967', sharingpercent: '100%', nomineerelationship: 'Father', 
                nomineemobile: '$10', nomineeemail: '6666554433', gaurdianname: 'amarjyot@gmail.com', gaurdiandob: 'Shivaraj Ray Saini', gaurdianrelationship: '22-Sep-1972'
                , gaurdianpan: 'Uncle', gaurdianemail: 'SSSDF4321K', gaurdianmobile: 'ShivrajSi@gmail.com' } 
    
    ];
  return (
    <>
    {isMobile ? (
      <Grid container spacing={2}>
        {data.map((item) => (
<>
<Grid className="minhegt50"  size={{  xs: 12, sm: 12,  md: 12, lg: 12, }}  key={item.id}>
<h4 >Nominee {item.id}</h4>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Nominee Name</p>
<label className='lbltxt'>{item.nomineename}</label>
</Grid>
<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Nominee PAN</p>
<label className='lbltxt'>{item.nomineepan}</label>
</Grid>


<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Nominee DOB</p>
<label className='lbltxt'>{item.nomineedob}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Sharing Percent</p>
<label className='lbltxt'>{item.sharingpercent}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Nominee Relationship</p>
<label className='lbltxt'>{item.nomineerelationship}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Nominee Mobile</p>
<label className='lbltxt'>{item.nomineemobile}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Nominee Email ID</p>
<label className='lbltxt'>{item.nomineeemail}</label>
</Grid>


<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Gaurdian Name</p>
<label className='lbltxt'>{item.gaurdianname}</label>
</Grid>


<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Gaurdian DOB</p>
<label className='lbltxt'>{item.gaurdiandob}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Gaurdian Relationship</p>
<label className='lbltxt'>{item.gaurdianrelationship}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Gaurdian PAN</p>
<label className='lbltxt'>{item.gaurdianpan}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Gaurdian Email ID</p>
<label className='lbltxt'>{item.gaurdianemail}</label>
</Grid>

<Grid className="minhegt50"  size={{  xs: 6, sm: 6,  md: 4, lg: 3, }}  key={item.id}>
<p>Gaurdian Mobile</p>
<label className='lbltxt'>{item.gaurdianmobile}</label>
</Grid>

</>
       
        ))}
      </Grid>
    ) : (
      <TableContainer component={Paper}>
        <Table className='maintabldata'>
          <TableHead>
            <TableRow>
            <TableCell>Nominee No.</TableCell>
              <TableCell>Nominee Name</TableCell>
              <TableCell>Nominee PAN</TableCell>
              <TableCell>Nominee DOB</TableCell>
              <TableCell>Sharing Percent</TableCell>
              <TableCell>Nominee Relationship</TableCell>
              <TableCell>Nominee Mobile</TableCell>
              <TableCell>Nominee Email ID</TableCell>
              <TableCell>Gaurdian Name</TableCell>
              <TableCell>Gaurdian DOB</TableCell>
              <TableCell>Gaurdian Relationship</TableCell>
              <TableCell>Gaurdian PAN</TableCell>
              <TableCell>Gaurdian Email ID</TableCell>
              <TableCell>Gaurdian Mobile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell><b>Nominee {row.id}</b></TableCell>
                <TableCell>{row.nomineename}</TableCell>
                <TableCell>{row.nomineepan}</TableCell>
                <TableCell>{row.nomineedob}</TableCell>
                <TableCell>{row.sharingpercent}</TableCell>
                <TableCell>{row.nomineerelationship}</TableCell>
                <TableCell>{row.nomineemobile}</TableCell>
                <TableCell>{row.nomineeemail}</TableCell>
                <TableCell>{row.gaurdianname}</TableCell>
                <TableCell>{row.gaurdiandob}</TableCell>
                <TableCell>{row.gaurdianrelationship}</TableCell>
                <TableCell>{row.gaurdianpan}</TableCell>
                <TableCell>{row.gaurdianemail}</TableCell>
                <TableCell>{row.gaurdianmobile}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </>
  )
}

export default NomineeDesktopMobileView