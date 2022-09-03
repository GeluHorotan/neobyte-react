import GlobalStyles from './Utility/GlobalStyles';
import React from 'react';

// Routes
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyles />
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
