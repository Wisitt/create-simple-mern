const express = require('express');
const router = express.Router();
const {
    createUser,
    loginUser,
  // Import other controller actions as needed
} = require('../controllers/user'); // นำเข้าคอนโทรลเลอร์ที่คุณสร้าง

// Define your routes
router.post('/register', createUser);
router.post('/login', loginUser);
// Define other routes and use corresponding controller actions

module.exports = router;
