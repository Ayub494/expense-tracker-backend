const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUser', userController.getUser);
router.get('/login', userController.login);

module.exports = router; 