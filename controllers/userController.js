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
            res.json({ message: 'Login successful', flag: true, user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error during login', error: error.message });
    }
}