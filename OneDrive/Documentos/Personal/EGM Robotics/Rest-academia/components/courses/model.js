const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    tittle: String,
    description: String,
    url: {
        type: String,
        required: true,
        },
    author: String,
    date: Date,
});

const model = mongoose.model('Cursos', mySchema);
module.exports = model;
