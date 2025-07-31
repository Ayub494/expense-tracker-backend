const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUser', userController.getUser);
router.post('/login', userController.login);
router.post('/addExpense', userController.addExpense); // Assuming you have a register method in userController

module.exports = router; 