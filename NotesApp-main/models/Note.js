const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },
});
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;