const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./controllers/user'); // Import your Sequelize instance

app.use(express.json());

// Synchronize your models with the database
sequelize.sync().then(() => {
    console.log('Database synchronized');
}).catch((error) => {
    console.error('Database synchronization error:', error);
});

// Use the userRoutes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
