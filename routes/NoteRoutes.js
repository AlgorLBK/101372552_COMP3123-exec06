const noteModel = require('../models/NotesModel');
const express = require("express")
const routes = express.Router()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async(req, res) => {
    // Validate request
    try {
        var newNote = new noteModel({
            ...req.body
        })
        await newNote.save()
        res.status(200).json(newNote)
    } catch (e) {
        console.log("Error creating new note", e);
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async(req, res) => {
    //TODO - Write your code here to returns all note
    try {
        let notes = await noteModel.find();
        res.status(201).json(notes)
    } catch (e) {
        console.error(e)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId',  async(req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
    try {
        let note = await noteModel.findById(req.params.noteId)
        res.status(200).json(note)
    } catch (e) {
        console.error('Error retrieving the note')
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async(req, res) => {
    //TODO - Write your code here to update the note using noteid
    try {
        let note = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        res.status(200).json(note)
    } catch (e) {
        console.error(`Error updating the note ${JSON.stringify(e)}`)
    }

});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to delete the note using noteid
    try {
        let note = await noteModel.findByIdAndDelete(req.params.noteId)
        res.status(200).json(note)
    } catch (e) {
        res.sendStatus(403)
    }
    
});


module.exports = routes