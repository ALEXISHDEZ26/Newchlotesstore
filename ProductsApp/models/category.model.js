const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
    name: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Category', categorySchema);