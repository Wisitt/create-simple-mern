require("dotenv").config();
const cors = require("cors");
const express = require("express");

const { authentication } = require("./middleware/auth");

const usersRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", authentication, usersRoutes);

const port = process.env.PORT || 5000;
app.listen(port, async () => {
    console.log(`Server is listening to port ${port}`);
});




// require("dotenv").config();

// // Express Application setup
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// app.use(cors());
// app.use(bodyParser.json());

// // Postgres client setup
// const { Pool } = require("pg");
// const pgClient = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
// });

// pgClient.on("connect", client => {
//     client
//         .query("CREATE TABLE IF NOT EXISTS values (number INT)")
//         .catch(err => console.log("PG ERROR", err));
// });

// //Express route definitions
// app.get("/", (req, res) => {
//     res.send("Hi");
// });

// // get the values
// app.get("/values/all", async (req, res) => {
//     const values = await pgClient.query("SELECT * FROM values");

//     res.send(values);
// });

// // now the post -> insert value
// app.post("/values", async (req, res) => {
//     if (!req.body.value) res.send({ working: false });

//     pgClient.query("INSERT INTO values(number) VALUES($1)", [req.body.value]);

//     res.send({ working: true });
// });

// app.listen(5000, err => {
//     console.log("ererererZ");
// });