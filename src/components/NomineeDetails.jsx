import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
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
  Button,
} from "@mui/material";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NomineeDetails() {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState('');

  const handleInputChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [textValue, setTextValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [radioValue, setRadioValue] = useState("");

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };
 
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab className='nominetxt' label="Nominee 1" {...a11yProps(0)} />
        <Tab  className='nominetxt' label="Nominee 2" {...a11yProps(1)} />
        <Tab  className='nominetxt' label="Nominee 3" {...a11yProps(2)} />
      </Tabs>

      {/* Content for each tab */}
      <TabPanel value={value} index={0}>
      <Grid container spacing={2}>
      <Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee Name</p>
<TextField
        label=""
        id="outlined-size-small"
        placeholder='Enter Nominee Name'
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>

<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee Age</p>
<TextField
        label=""
        id="outlined-size-small"
        value={age}
        onChange={handleInputChange}
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>
{age && age < 18 ? (
  <>
<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 3, }} >
 
<p>Guardian Name</p>
<TextField
        label=""
        id="outlined-size-small"
        placeholder='Enter Guardian Name'
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>
<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 3, }} >
<p>Guardian PAN </p>
<TextField
        label=""
        id="outlined-size-small"
        placeholder='Enter Guardian PAN No.'
        size="small"
        sx={{ width: '100%' }}
      /> 
</Grid> </>) :""}

<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee Relationship</p>
<TextField
        label=""
        id="outlined-size-small"
        placeholder='Enter Nominee Relationship'
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>

<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 3, }} >
<p>Nominee PAN Card Details</p>
<TextField
        label=""
        id="outlined-size-small"
       placeholder='Enter Nominee PAN Card Details'
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>
     
 
  
    </Grid>
    
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Tab 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Tab 3
      </TabPanel>
    </Box>
  );
}

export default NomineeDetails;