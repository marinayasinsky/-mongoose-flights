require('dotenv').config();
const express = require('express');
const app = express();
const connectToDB = require('./config/db');
const Flight = require('./models/Flight');


// Configure middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Flights</h1> <a href="/flights">Flights</a>');
});

app.get('/newflight', (req, res) => { 
    res.render('New');
    });

app.get('/flights', (req, res) => {
  Flight.find({}, (error, allFlights) => {   
    res.render('Index', { flight: allFlights });
  });
});

app.post('/flights', (req, res) => {
   console.log(req.body);
    Flight.create(req.body, (error, createdFlight) => {
      res.redirect('/flights');
    });
  });


// Listening to server
app.listen(3000, () => {
    console.log(`Server running on  port 3000`);
    connectToDB();
    });
    