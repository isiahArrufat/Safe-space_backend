const express = require("express");

const entries = express.Router({ mergeParams: true });

const {
    getAllEntries,
    getEntry,
    newEntry,
    deleteEntry,
    updateEntry,
    getEntriesById,    
} = require("../queries/entries");

// index
entries.get('/', async (req, res) => {
    try {
        const allEntries = await getAllEntries();
        res.status(200).json(allEntries);
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
});

// show
entries.get('/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        console.log("controller", id)
        const entry = await getEntriesById(id);
        if (entry) {
            res.json(entry);
        } else {
            res.status(404).json({ error: 'entry not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
});
// create
entries.post('/', async (req, res) => {
    try {
     const entry = await newEntry(req.body);
     res.json(entry);
    } catch (error) {
         res.status(400).json({ error: "unable to create entry"});
     }
 });
// update
 entries.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEntry = await updateEntry(id, req.body);
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
});
// delete
entries.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEntry = await deleteEntry(id);
        if (deletedEntry.id) {
            res.status(200).json(deletedEntry);
        } else {
            res.status(404).json("song not found");
        }
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
});



module.exports = entries