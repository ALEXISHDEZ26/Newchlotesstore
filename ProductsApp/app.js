// app.js
const express = require('express');
const bodyParser = require('body-parser');


// initialize our express app

const product = require('./routes/product.route'); // Imports routes for the products

const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://alexis:rock260795@mydatabase-rdzfu.mongodb.net/prducts?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);



app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


