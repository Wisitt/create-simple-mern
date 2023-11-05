const jwt = require("jsonwebtoken");
const { Pool } = require('pg');

const createPool = () => {
    return new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    });
};

const generateToken = (email, expiresIn) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn,
    });
};

module.exports = { createPool, generateToken };
