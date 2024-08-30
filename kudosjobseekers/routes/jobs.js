const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

// Create a new job
router.post('/create', async (req, res) => {
    // console.log("*********************"+req.body);
  try {
    const { title, description, company, location, salary, requirements } = req.body;
    const job = new Job({ title, description, company, location, salary, requirements });
    await job.save();
    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating job' });
  }
});

// Get all jobs
router.get('/alljobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

// Get a single job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching job' });
  }
});

// Update a job by ID
router.put('/:id', async (req, res) => {
  try {
    const { title, description, company, location, salary, requirements } = req.body;
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { title, description, company, location, salary, requirements },
      { new: true }
    );
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json({ message: 'Job updated successfully', job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating job' });
  }
});

// Delete a job by ID
router.delete('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting job' });
  }
});

module.exports = router;
