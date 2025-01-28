const express = require('express');
const app = express();
const cors = require('cors');
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