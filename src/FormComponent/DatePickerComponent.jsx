
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

export const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label="Select Date" 
      value={selectedDate}
      onChange={(newValue) => setSelectedDate(newValue)}
      renderInput={(params) => <TextField {...params}   size="small"  // Set size to small
      sx={{ width: 100 }}  />}
    />
  </LocalizationProvider>
  )
}

export default DatePickerComponent;