const db = require('../config/db');

exports.getUser = async() => {
    const result = await db.query('SELECT * FROM "user"');
    console.log(result.rows);
    return result.rows;
};