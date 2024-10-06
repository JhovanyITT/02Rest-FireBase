const projectModel = require('../models/projectModel');

async function getAllProjects(req, res) {
    const allProjects = await projectModel.getAllProjects();
    if(allProjects == null){
        res.status(500).json({ code: 500, message: "Error interno del servidor" })
        return;
    }
    allProjects.length > 0 ?
        res.status(200).json(allProjects) :
        res.status(404).json({ code: 404, message: "No se han encontrado datos" });
}

async function createProject(req, res) {
    const newProject = await projectModel.createProject(req.body);
    newProject != null ? 
        res.status(201).json(newProject) : 
        res.status(500).json({ code: 500, message: "Error interno del servidor" })
}

module.exports = {
    getAllProjects,
    createProject
}