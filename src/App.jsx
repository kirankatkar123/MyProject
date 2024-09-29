import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import Topbar from './components/TopBar';
import LandingPage from './components/LandingPage';

import LoginMobile from './components/LoginMobile';
import { Dashboard } from './components/Dashboard';
import Otp from './components/OTP';
import PortfolioView from './components/PortfolioView';
import SubscriptionView from './components/SubscriptionView';
import RedemptionView from './components/RedemptionView';
 
function App() {
  return (
    <Router >
    <Routes>
    <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />}  />
      <Route path="/otp" element={<Otp />} />
      <Route path="/loginmobile" element={<LoginMobile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/portfolioview" element={<PortfolioView />} />
      <Route path='/subscriptionview' element={<SubscriptionView/>}/>
      <Route path='/redemptionview' element={<RedemptionView/>}/>
      
    </Routes>
  </Router>
    // <div className="App">
        

    //  <LandingPage/>
 
    // </div>
  );
}

export default App;
