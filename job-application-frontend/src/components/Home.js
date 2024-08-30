// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// function Jobs() {

//     const navigate = useNavigate();
  
//   const handleClick = () => {
//     navigate('/signup');
//   }
//   return (
//     <>
//         <br></br>
//         <div className="container text-dark bg-dark">
//             <div class="card">
//                 <div class="card-body">
//                     <h5 class="card-title">Job Role</h5>
//                     <h6 class="card-subtitle mb-2 text-body-secondary">Company Name</h6>
//                     <p class="card-text">Stipend</p>
//                     <button onClick={handleClick} >Apply</button>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Jobs

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function Jobs() {
  const [jobs, setJobs] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      
      try {
        // Ensure the URL is correctly formatted
        const response = await axios.get('http://localhost:5000/api/jobs/alljobs');
        console.log("********");
        setJobs(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('Error fetching jobs:', error.message);
      }
    };

    fetchJobs();
  }, []);

  const handleClick = (jobId) => {
    navigate(`/signup`);
  };

  return (
    <>
      <div className="container my-5">
        <Navbar/>
        <h1>Jobs</h1>
        <div className="row">
          {jobs.map((job) =>(
            <div className="card" key={job._id}>
              <div className="card-body">
                <h5 className="card-subtitle mb-2 text-body-secondary">{job.company}</h5>
                <h6 className="card-title">Role: {job.title}</h6>
                <h6 className="card-title">Location: {job.location}</h6>
                <p className="card-text">Stipend: {job.salary}</p>
                <button onClick={() => handleClick(job._id)}>Apply here</button>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </>
  );
}

export default Jobs;


