import express from 'express';
import { getAllProjects, createProject, getProjectById, updateProject, deleteProject } from '../controllers/projectController.js';

const projectRouter = express.Router();

projectRouter.get('/allprojects', getAllProjects);
projectRouter.post('/createproject', createProject);
projectRouter.get('/singleproject/:id', getProjectById);
projectRouter.put('/updateproject/:id', updateProject);
projectRouter.delete('/deleteproject/:id', deleteProject);

export default projectRouter;
    