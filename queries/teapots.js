const db = require("../db/dbConfig.js")


//Index
const getAllTeapots = async () => {
    try {
        const allTeapots = await db.any(`SELECT * FROM teapots`);
        return allTeapots
    } catch (error) {
        return error;
    }
};

//Show
const getOneTeapot = async (id) => {
    try {
        const oneTeapot = await db.one(`SELECT * FROM teapots WHERE teapots.id = $1`, id)
        return oneTeapot
    } catch (error) {
        return error
    }
}



module.exports = {getAllTeapots, getOneTeapot}