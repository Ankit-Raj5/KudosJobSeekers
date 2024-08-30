import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">KudosJobSeekers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </a>
                            <ul class="dropdown-menu">
                                <li><a> Kudosjobseekers is a job search service designed to help job seekers find ideal job roles based on their qualifications and preferences.</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                    <li className="nav-item">
                        <Link className="nav-link" to="/createJob">Post Job</Link>
                    </li>
                    </div>
                </div>
            </nav>
        </div>
    </>
  );
}

export default Navbar;