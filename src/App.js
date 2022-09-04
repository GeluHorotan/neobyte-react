import GlobalStyles from './Utility/GlobalStyles';
import React from 'react';

// Routes
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import MicroHeader from './components/MicroHeader';
import NotFound from './pages/NotFound';
function App() {
  // Used useLocation hook to get the location that is gonna be used for Routing.
  const location = useLocation();
  return (
    <div>
      {/* Global Styles has been added, which includes different font-sizes, font-weights for text, as well as styles that has to be applied everywhere on our application */}
      <GlobalStyles />

      <Routes location={location} key={location.pathname}>
        {/* If a route doesn't match our routes, the NotFound page will be rendered which indicates the route doesn't exist. */}
        <Route path='*' exact element={<NotFound />} />
        {/* Default route that renders the Homepage page as well as the Micro Header component, which for this particular situation works, but if we scale the application we have to refactor because we dont' want to keep writing again and again the render of Micro Header Component. */}
        <Route
          path='/'
          exact
          element={
            <>
              <MicroHeader />
              <Homepage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
