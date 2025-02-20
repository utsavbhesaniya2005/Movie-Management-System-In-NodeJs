const movieModel = require('../models/movieModel/movieModel');
const fs = require('fs');

const defaultController = async (req, res) => {

    let movieData = await movieModel.find();

    res.render('showMovies', { movieData });
}

const addConntroller = (req, res) => {

    res.render('addMovie');
}

const addMovieController = (req, res) => {

    let { title, description, releaseDate, genre, rating } = req.body;

    let { path } = req.file;

    let movies = new movieModel({
        title,
        description,
        releaseDate,
        genre,
        rating,
        moviePoster : path
    });

    movies.save();

    console.log('Movie Added.');

    res.redirect('/');
}

const editConntroller = async (req, res) => {

    const movieData = await movieModel.findById(req.params.id);
    
    console.log("Data Finded.");

    res.render('editMovie', { movieData });
}

const updateMovieController = async (req, res) => {

    const findPoster = await movieModel.findById(req.params.id);
    
    fs.unlink(findPoster.moviePoster, (err) => {
        
        console.log("Image Deleted Locally.");
    });
    
    let movie = {
        ...req.body, moviePoster : req.file.path
    }

    await movieModel.findByIdAndUpdate(req.params.id, movie);
    
    console.log('Data Updated.');
    
    res.redirect('/');
}  

const deleteController = async (req, res) => {

    let deletedMovie = await movieModel.findById(req.params.id);
    
    fs.unlink(deletedMovie.moviePoster, (err) => {
        
        console.log('Image Delete From Local Database.');
    });

    await movieModel.findByIdAndDelete(req.params.id);

    console.log('Data Deleted.');

    res.redirect('/');
}

const singleMovieController = async (req, res) => {

    const singleMovie = await movieModel.findById(req.params.id);

    res.render('singleView', { singleMovie });
}

module.exports = {
    default : defaultController,
    add : addConntroller,
    addMovie : addMovieController,
    edit : editConntroller,
    updateMovie : updateMovieController,
    delete : deleteController,  
    singleMovie : singleMovieController,
};