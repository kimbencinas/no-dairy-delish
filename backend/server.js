const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const Pool = require('pg').Pool;
require('dotenv').config();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    const userExists = await pool.query(
        'SELECT * FROM users WHERE username = $1 OR email = $2',
        [username, email]
    );
    if (userExists.rows.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, hashedPassword]
        );
        res.status(201).json({ message: 'User created successfully', user: newUser.rows[0]});
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});