const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
var noteSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        required: true,
        lowercase: true
    },
    noteDescription: {
        type: String,
        required: true,
        lowercase: true
    },
    priority: {
        type: String,
        required: true,
        enum : ['HIGH', 'LOW','MEDIUM']
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('note', noteSchema)