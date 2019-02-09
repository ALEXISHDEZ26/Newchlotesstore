const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.set('debug', true);
let dev_db_url = 'mongodb://alexis:rock260795@mydatabase-shard-00-00-rdzfu.mongodb.net:27017,mydatabase-shard-00-01-rdzfu.mongodb.net:27017,mydatabase-shard-00-02-rdzfu.mongodb.net:27017/prducts?ssl=true&replicaSet=MYDataBase-shard-0&authSource=admin&retryWrites=true';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

const port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});