const Project = require('../models/Project');

export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 }).limit(x);
        res.json(projects);
        }
         catch  (error)  {
            res.status(500).json({ message: 'Error fetching projects', error: error.message });
         }   
    };
    
    export const createProject = async (req , res) => {
        try {
            const newProject = new Project (req.body);
            await newProject.save();
            res.status(201).json(newProject);
        }
            catch (error) {
                res.status(400).json({ message: 'Error adding project', error: error.message });

        }
    };



    export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateProject = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedProject = await Project.findByIdAndUpdate(
            id, 
            {$set: req.body},
            {new: true, runValidators: true}
        );
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }   
        res.status(200).json(updatedProject);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating project', error: error.message });
    }
};


    export const deleteProject = async (req, res) => {
        try {
            const project = await Project.findByIdAndDelete(req.params.id);
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.status(200).json({ message: 'Project deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting project', error: error.message });
        }
    }
    