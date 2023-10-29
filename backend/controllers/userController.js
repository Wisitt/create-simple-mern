const { createPool } = require("../utils");

const pool = createPool();

const getAllUsers = async (req, res, next) => {
  try {
    const conn = await pool.connect();
    const { rows } = await conn.query("SELECT * FROM users");
    conn.release();
    res.status(200).json({
      users: rows,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  } 
};

module.exports = {
  getAllUsers,
};
