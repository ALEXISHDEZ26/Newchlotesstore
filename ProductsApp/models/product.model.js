const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    precio: {type: Number, required: false},
    descripcion:{type: String, required: false, max: 240},
    fecha:{type: Date, required: false},


});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
