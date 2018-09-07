let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema ({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports.Book = mongoose.model('Book', schema);