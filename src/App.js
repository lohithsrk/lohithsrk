import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.page';
import Survey from './pages/Survey.page';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/your-insights-matter" element={<Survey />} />
          <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
