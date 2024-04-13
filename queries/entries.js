const db = require("../db/dbConfig");

const getAllEntries = async () => {
    try {
      const allEntries = await db.any("SELECT * FROM entries ");
      return allEntries;
    } catch (error) {
      return error;
    }
  };
  
  const getEntry = async (id) => {
    try {
      const oneEntry = await db.one("SELECT * FROM entries WHERE id=$1", id);
      return oneEntry;
    } catch (error) {
      return error;
    }
  };
  
  const newEntry = async (entry) => {
    try {
      const newEntry = await db.one(
        "INSERT INTO entries (entries_id, body, mood, publish) VALUES($1, $2, $3) RETURNING *",
        [
          entry.entries_id,
          entry.body,
          entry.mood,
          entry.publish,
        ]
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
  
  const updateEntry = async (entry) => {
    try {
      const updatedEntry = await db.one(
        "UPDATE entries SET entries_id=$1, body=$2, mood=$3, publish=$4 where id=$5 RETURNING *",
        [
          entry.entries_id,
          entry.body,
          entry.mood,
          entry.publish,
          id,
        ]
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
  };