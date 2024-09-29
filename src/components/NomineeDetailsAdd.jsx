import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

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

 
function NomineeDetailsAdd() {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState('');
   // Initialize state with one set of input fields
   const [fields, setFields] = useState([{ id: 1, name: '', age: '' }]);

   // Add a new set of input fields
   const addFields = () => {
     setFields([...fields, { id: fields.length + 1, name: '', age: '' }]);
   };
 
 
   // Handle input field change for each set of input fields
   const handleInputChange2 = (id, field, value) => {
     setFields(
       fields.map((item) => 
         item.id === id ? { ...item, [field]: value } : item
       )
     );
   };

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
       <div>
     
      {fields.map((item, index) => (
        <div key={item.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Nominee {index + 1}</h3>
          <Grid container spacing={2}>
          <Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Nominee Name</p>
<TextField
        label=""
        id="outlined-size-small"
        placeholder='Enter Nominee Name'
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>

<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Nominee Age <Tooltip title="If the nominee is under the age of 18, you can fill in guardian information." arrow>
    <InfoIcon className='inforiconfild'/>
    </Tooltip></p>  
<TextField
        label=""
        id="outlined-size-small"
        value={age}
        placeholder='Enter Nominee Age'
        onChange={handleInputChange}
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>

<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Nominee Relationship</p>
<TextField
        label=""
        id="outlined-size-small"
        placeholder='Enter Nominee Relationship'
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>

<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Nominee PAN Card Details</p>
<TextField
        label=""
        id="outlined-size-small"
       placeholder='Enter Nominee PAN Card Details'
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>
{age && age < 18 ? (
  <>
<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
 
<p>Guardian Name</p>
<TextField
        label=""
        id="outlined-size-small"
        placeholder='Enter Guardian Name'
        size="small"
        sx={{ width: '100%' }}
      />
</Grid>
<Grid  size={{  xs: 12, sm: 6,  md: 4, lg: 2, }} >
<p>Guardian PAN </p>
<TextField
        label=""
        id="outlined-size-small"
        placeholder='Enter Guardian PAN No.'
        size="small"
        sx={{ width: '100%' }}
      /> 
</Grid> </>) :""}

</Grid>
        </div>
      ))}

      {/* Plus Icon Button */}
      <button onClick={addFields} style={{ display: 'flex', alignItems: 'center', padding: '10px', marginTop: '20px' }}>
      <span>Add<span variant="contained" class="buttonplus font15">+</span></span>
      </button>

      
    </div>
       
      <Grid container spacing={2}>
     
     
 
  
    </Grid>
    
     
    </Box>
  );
}

export default NomineeDetailsAdd;