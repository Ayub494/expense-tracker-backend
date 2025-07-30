const db = require('../config/db');

exports.getUser = async() => {
    const result = await db.query('SELECT * FROM "user"');
    console.log(result.rows);
    return result.rows;
};

exports.login = async (username, password) => {
    const result = await db.query('SELECT * FROM "user" WHERE email = $1 AND password = $2', [username, password]);
    if (result.rows.length > 0) {
        return result.rows[0];
    }
    return null;
}