import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import JobApplicationForm from './components/JobApplicationForm';
import CreateJob from './components/CreateJob';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} /> 
          <Route path="/apply" element={<JobApplicationForm />} />
          <Route path="/createJob" element={<CreateJob/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
