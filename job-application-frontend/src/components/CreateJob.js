import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateJob() {
  const [company, setCompanyName] = useState('');
  const [title, setTitle] = useState('');
  const [salary, setStipend] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      company,
      title,
      salary,
      location
    };

    try {
      const response = await axios.post('https://kudosjobseekers.onrender.com/api/jobs/create', jobData);
      alert("Job created Successfully")
      navigate('/'); 
    } catch (error) {
      console.error('Error creating job:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            className="form-control"
            value={company}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Role</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>salary</label>
          <input
            type="text"
            className="form-control"
            value={salary}
            onChange={(e) => setStipend(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Create Job</button>
      </form>
    </div>
  );
}

export default CreateJob;
