const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'caboose.proxy.rlwy.net',
    port: 28117,
    user: 'root',
    password: 'cQUGvlzfuMlbZeGVYjsGsbJQbjSCRlVy',
    database: 'railway'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to Railway MySQL.');
});

module.exports = db;
