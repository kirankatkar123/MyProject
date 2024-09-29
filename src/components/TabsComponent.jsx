import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

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

 
const TabsComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Tab One"  />
        <Tab label="Tab Two"  />
        <Tab label="Tab Three"/>
      </Tabs>

      <TabPanel value={value} index={0}>
        Content for Tab One  Content for Tab One Content for Tab One Content for Tab One Content for Tab One Content for Tab One Content for Tab One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Tab Two  Content for Tab Two Content for Tab Two Content for Tab Two Content for Tab Two Content for Tab Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Tab Three    Content for Tab Three   Content for Tab Three   Content for Tab Three   Content for Tab Three   Content for Tab Three   Content for Tab Three   Content for Tab Three
      </TabPanel>
    </Box>
  );
};

export default TabsComponent;
