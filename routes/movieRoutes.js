const express = require('express');
const routes = express.Router();
const routeController = require('../controllers/routeControllers');
const upload = require('../middlewares/multer')

// Home Page Render
routes.get('/', routeController.default);

// Add Movie Page Render
routes.get('/add', routeController.add);

// Add Movie To Database Route
routes.post('/addMovie', upload.single('moviePoster'), routeController.addMovie)

// Edit Movie Page Render 
routes.get('/movies/:id', routeController.edit);

// Update Movie Route
routes.post('/updateMovies/:id', upload.single('moviePoster'), routeController.updateMovie)

// Delete Data
routes.get('/deleteMovies/:id', routeController.delete);

module.exports = routes;