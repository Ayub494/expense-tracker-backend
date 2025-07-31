const userModel = require('../models/userModel');

exports.getUser = async (req, res) => {
    try {
        const data = await userModel.getUser();
        res.json(data)
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving user data', error: error.message });
    }
}   

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.login(username, password);
        if (user) {
            res.status(200).json({ message: 'Login successful', flag: true, user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error during login', error: error.message });
    }
}

exports.addExpense = async (req, res) => {
    try {
        const {item, price, category,userId } = req.body;
        // Assuming you have a method to add an expense in userModel
        const data = await userModel.addExpense(item, price, category, userId);
        res.status(200).json({ message: 'Expense added successfully', data });
    } catch (error) {
        res.status(400).json({ message: 'Error adding expense', error: error.message });
    }
}