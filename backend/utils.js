const jwt = require("jsonwebtoken");
const { Pool } = require('pg');


const createPool = () => {
    return new Pool({
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    });
};

const generateToken = (email, expiresIn) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn,
    });
};

module.exports = { createPool, generateToken };