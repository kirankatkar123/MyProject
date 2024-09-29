import React, { useState } from 'react';
import TopBar from './TopBar';

import ModalComponent from './ModalComponent';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import CustomButtonTheme from '../FormComponent/CustomButtonTheme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DatePickerComponent from '../FormComponent/DatePickerComponent';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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

// Accessibility helper function
function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const DashboardPage = (props) => {
    // Manage state for multiple sets of tabs
    const [valueFirstTab, setValueFirstTab] = useState(0);
    const [valueSecondTab, setValueSecondTab] = useState(0);
  
    // Handlers for tab changes
    const handleFirstTabChange = (event, newValue) => {
      setValueFirstTab(newValue);
    };
  
    const handleSecondTabChange = (event, newValue) => {
      setValueSecondTab(newValue);
    };
  return (
   <>
    
    <TopBar></TopBar>
   
   <ModalComponent/>
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Item>
          <Box sx={{ width: '100%' }}>
      {/* Second Tab Set */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 4 }}>
        <Tabs value={valueSecondTab} onChange={handleSecondTabChange} aria-label="Second Tab Set">
          <Tab label="Second Tab 1" {...a11yProps(0)} />
          <Tab label="Second Tab 2" {...a11yProps(1)} />
          <Tab label="Second Tab 3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={valueSecondTab} index={0}>
      <Stack direction="row" spacing={2}>
      <Button

variant="contained"

color="primary" // or color="default" or color="secondary"

>

Click me!

</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      {/* <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
     <Button variant="contained" sx={{ backgroundColor: 'third.main', color: 'third.contrastText' }}>
        Third Button
      </Button> */}
      
    </Stack>
      </TabPanel>
      <TabPanel value={valueSecondTab} index={1}>
     kiran
      </TabPanel>
      <TabPanel value={valueSecondTab} index={2}>
      Kayara
      </TabPanel>
    </Box>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item>
            
          <Box sx={{ width: '100%' }}>
      {/* First Tab Set */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={valueFirstTab} onChange={handleFirstTabChange} aria-label="First Tab Set">
          <Tab  label={
              <div>
                <strong>Tab 1</strong> 
                <small>Equity</small>
              </div>
            } {...a11yProps(0)} />
          <Tab label="First Tab 2" {...a11yProps(1)} />
          <Tab label="First Tab 3" {...a11yProps(2)} />
        </Tabs>
      </Box>

      
      <TabPanel value={valueFirstTab} index={0}>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item> <DatePickerComponent></DatePickerComponent> </Item>
        </Grid>
        <Grid size={6}>
          <Item> <DatePickerComponent></DatePickerComponent> </Item>
        </Grid>
        
      </Grid>
    </Box>
           
        
          
       
      </TabPanel>
      <TabPanel value={valueFirstTab} index={1}>
       Lalit
      </TabPanel>
      <TabPanel value={valueFirstTab} index={2}>
       Sandesh
      </TabPanel>
</Box>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Item>
            
            <DatePickerComponent ></DatePickerComponent>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </Box>

     
  
 
     </>
  );
};

export default DashboardPage;
