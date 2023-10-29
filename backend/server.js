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

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Server is listening to port ${port}`);
});