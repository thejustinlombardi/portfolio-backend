//Require the express module
const express = require('express');

//Import the project model
const Project = require('../db/models/Project');

//Instantiate a router
const router = express.Router();

//Get all projects
router.get('/', async (req, res, next) => {
	try {
		const projects = await Project.find({});
		res.json(projects);
	} catch (error) {
		next(error);
	}
});

// Get projects filtered by title
// http://localhost:3001/api/projects/title
router.get('/title/:title', async (req, res, next) => {
	try {
		const projects = await Project.find({ title: `${req.params.title}` });
		res.json(projects);
	} catch (error) {
		next(error);
	}
});

// get one project by id
// http://localhost:3001/api/projects/id
router.get('/id/:id', async (req, res, next) => {
	try {
		const project = await Project.findById(req.params.id);
		if (project) {
			res.json(project);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
