const express = require('express');
const app = express();
const port = 3005;
const routes = require('./routes/movieRoutes');
const path = require('path');
const db = require('./db/dbConnect');

// View Engine Setup
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Static Folder
app.use(express.static(path.join(__dirname, '/public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/', routes);

app.listen(port, (err) => {

    if(!err){
        
        console.log(`Server Runs On http://localhost:${port}`);
    }
});