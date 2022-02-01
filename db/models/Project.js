const mongoose = require('../connection');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	title: String,
	id: Number,
	tech: String,
	description: String,
	status: String,
	motivation: String,
	image: String,
	site: String,
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
