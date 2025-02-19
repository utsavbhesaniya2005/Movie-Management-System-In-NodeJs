const db = require('mongoose');

const movieDB = db.connect('mongodb+srv://ukbhesaniya01:PiRcsU7u7FFISKRu@todocluster.m7llv.mongodb.net/movieMaster').then(() => {
    
    console.log('Database Connected');
}).catch((err) => {

    console.log('Database Error :- ', err);
});

module.exports = movieDB;