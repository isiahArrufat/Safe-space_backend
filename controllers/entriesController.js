const express = require("express");

const entries = express.Router({ mergeParams: true });

const {
    getAllEntries,
    getEntry,
    newEntry,
    deleteEntry,
    updateEntry    
} = require("../queries/entries");

const { findUserByUsername } = require('../queries/users')

// index
entries.get('/', async (req, res) => {
    try {
        const allEntries = await getAllEntries();
        res.status(200).json(allEntries);
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
});

entries.get('/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const entry = await getEntry(id);
        if (entry) {
            res.json(entry);
        } else {
            res.status(404).json({ error: 'entry not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
});



module.exports = entries