// Dependencies
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3001);
const cors = require('cors');
const projectController = require('./controllers/projectController');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/projects');
});

// Controllers
// Forward all requests to localhost:3001/api/projects to the post controller
app.use('/api/projects', projectController);

app.listen(app.get('port'), () => {
	console.log(`connected to port ${app.get('port')}!`);
	console.log('We can get posting...🐧');
});

module.exports = app;
