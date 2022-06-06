import express from 'express';
import { deleteTask, getAllTask, getTask, createTask, updateTask } from '../controllers/task.controllers.js';


const router = express.Router();

router.get('/tasks', getAllTask)


router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)

export default router