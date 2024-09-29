import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';
import TopBar from './TopBar';
import Grid from '@mui/material/Grid2';
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
  } from "@mui/material";
  
  
const PrimaryDetails = () => {
    const [textValue, setTextValue] = useState("");
    const [selectValue, setSelectValue] = useState("option2");
    const [selectValue2, setSelectValue2] = useState("option2");
    const [selectValue3, setSelectValue3] = useState("option2");
    const [radioValue, setRadioValue] = useState("");
  
    const handleTextChange = (e) => {
      setTextValue(e.target.value);
    };
  
    const handleSelectChange = (e) => {
      setSelectValue(e.target.value);
    };
    const handleSelectChange2 = (e) => {
      setSelectValue2(e.target.value);
    };
    const handleSelectChange3 = (e) => {
      setSelectValue3(e.target.value);
    };
    const handleRadioChange = (e) => {
      setRadioValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ textValue, selectValue, radioValue });
    };
  return (
    <Box className="maincontent">
     
    <Grid container spacing={2}>

  
  
 


  

<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 4, }} >
<p>MF Scheme *</p>
<TextField
        label=""
        id="outlined-size-small" disabled
        defaultValue="HDFC Developed World Indexes Fund of Funds "
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>



<Grid   size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Order By *</p>
 {/* Select Input */}

     
     <Select value={selectValue} onChange={handleSelectChange}  size="small"
     sx={{ width: '100%' }} >
     
        <MenuItem value="option2">Amount</MenuItem>
       <MenuItem value="option3">Units</MenuItem>
     </Select>
  
</Grid>
{selectValue === 'option2' && (
<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Enter Amount *</p>
<TextField
        label=""
        id="outlined-size-small"
        defaultValue="1000"
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>
)}
{selectValue === 'option3' && (
<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Enter Units *</p>
<TextField
        label=""
        id="outlined-size-small"
        defaultValue="0"
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>
 )}


<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Folio *</p>
<Select value={selectValue2} onChange={handleSelectChange2}  size="small"
     sx={{ width: '100%' }} >
     
        <MenuItem value="option2">123456</MenuItem>
       <MenuItem value="option3">234582</MenuItem>
     </Select>
</Grid>


<Grid   size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Platform *</p>
<Select value={selectValue3} onChange={handleSelectChange3}  size="small"
     sx={{ width: '100%' }} >
     
        <MenuItem value="option2">BSE</MenuItem>
       <MenuItem value="option3">NSE</MenuItem>
     </Select>
</Grid>



 </Grid>
</Box>
  )
}

export default PrimaryDetails