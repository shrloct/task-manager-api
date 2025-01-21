const express = require('express'); 
const Task = require('../models/Task'); 

const router = express.Router(); 

router.get('/tasks', async function (req, res) {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }  catch(err) {
        res.status(500).json({error: err.message});
    }
});

router.post('/tasks', async (req, res) => {
    try {
      const newTask = new Task(req.body); 
      const savedTask = await newTask.save(); 
      res.status(201).json(savedTask); 
    } catch (err) {
      res.status(400).json({ error: err.message }); 
    }
  });
  

  router.put('/tasks/:id', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true, runValidators: true } 
      );
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' }); 
      }
      res.status(200).json(updatedTask); 
    } catch (err) {
      res.status(400).json({ error: err.message }); 
    }
  });
  
  
  router.delete('/tasks/:id', async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id); 
      if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' }); 
      }
      res.status(200).json({ message: 'Task deleted successfully' }); 
    } catch (err) {
      res.status(500).json({ error: err.message }); 
    }
  });
  
  module.exports = router; 