const db = require("../db/dbConfig");

const getAllEntries = async () => {
    try {
        const allEntries = await db.any("SELECT * FROM entries");
        return allEntries;
    } catch (error) {
        return error;
    }
};

const getEntry = async (id) => {
    try {
        const oneEntry = await db.one("SELECT * FROM entries WHERE id = $1", id);
        return oneEntry;
    } catch (error) {
        return error;
    }
};

const getEntriesById = async (id) => {
    try {
        const entriesById = await db.any("SELECT * FROM entries WHERE user_id = $1", id);
        return entriesById;
    } catch (error) {
        return error;
    }
};

const newEntry = async (user_id, body, mood, publish) => {
    try {
        const newEntry = await db.one(
            "INSERT INTO entries (user_id, body, mood, publish) VALUES ($1, $2, $3, $4) RETURNING *",
            [user_id, body, mood, publish]
        );
        return newEntry;
    } catch (error) {
        return error;
    }
};

const deleteEntry = async (id) => {
    try {
        const deletedEntry = await db.one(
            "DELETE FROM entries WHERE id = $1 RETURNING *",
            id
        );
        return deletedEntry;
    } catch (error) {
        return error;
    }
};

const updateEntry = async (id, entries_id, body, mood, publish) => {
    try {
        const updatedEntry = await db.one(
            "UPDATE entries SET entries_id = $1, body = $2, mood = $3, publish = $4 WHERE id = $5 RETURNING *",
            [entries_id, body, mood, publish, id]
        );
        return updatedEntry;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllEntries,
    getEntry,
    newEntry,
    deleteEntry,
    updateEntry,
    getEntriesById
};
