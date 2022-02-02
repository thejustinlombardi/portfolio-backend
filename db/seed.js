const mongoose = require('../db/connection');
const seedData = require('./seed.json');
const Project = require('./models/Project');

// First we delete the projects
Project.deleteMany({})
	.then(() => {
		// insert many projects docs
		Project.insertMany(seedData).then((project) => {
			console.log('We have projects! 🐹');
			console.log(project);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
