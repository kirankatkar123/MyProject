import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './FormComponent/theme.js';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <App />
</ThemeProvider>,
document.getElementById('root')
)
