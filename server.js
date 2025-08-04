const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/submit', (req, res) => {
    const { name, amount } = req.body;
    const sql = 'INSERT INTO sales_data (name, amount) VALUES (?, ?)';
    
    db.query(sql, [name, amount], (err, result) => {
        if (err) throw err;
        console.log('Data inserted:', result.insertId);
        res.send(`<h2>Thank you, ${name}. You sold ${amount} items!</h2><a href="/">Go Back</a>`);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
