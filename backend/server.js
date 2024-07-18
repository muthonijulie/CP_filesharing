const express = require("express");
const mysql = require("mysql2"); // Make sure this is mysql2
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database:"phantom_docs"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO USERS (name, email, password) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json({ error: err.message });
        }
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Server running on port 8081");
});
