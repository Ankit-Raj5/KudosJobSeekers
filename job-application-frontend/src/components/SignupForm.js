import React, { useState } from 'react';
import axios from '../api/connect';
import Navbar from './Navbar';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({
        ...formData,
        resume: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('resume', formData.resume);

    try {
      const response = await axios.post('http://localhost:5000/api/signup', data);
      alert("Application submitted successfully");
    } catch (error) {
      alert('Error signing up');
    }
  };

  return (
    <div>
      <Navbar/>
        <form onSubmit={handleSubmit}>
        <div className="container">
          <h2>Apply Now</h2>
          <strong>Name : </strong>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br/>
          <br/>
          <strong>Email : </strong>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br/>
          <br/>
          <strong>Password : </strong>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br/>
          <br/>
          <strong>Upload your Resume : </strong>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            required
          />
          <br/>
          <br/>
          <button type="submit">Submit Application</button>
          </div>
        </form>
      </div>
    
  );
};

export default SignupForm;
