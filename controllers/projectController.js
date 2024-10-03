const projectModel = require('../models/projectModel');

function getAllProjects(req, res) {
    const projects = projectModel.getAllProjects();
    projects.length > 0 ?
        res.status(200).json(projects) :
        res.status(404).json({ code: 404, message: "No se han encontrado datos" });
}

function createProject(req, res) {
    //Validación de la estructura
    try {
        const newProject = projectModel.createProject(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ code: 400, message: "Error por parte del cliente" })
    }
}

module.exports = {
    getAllProjects,
    createProject
}