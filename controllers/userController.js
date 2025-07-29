const userModel = require('../models/userModel');

exports.getUser = async (req, res) => {
    try {
        const data = await userModel.getUser();
        res.json(data)
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving user data', error: error.message });
    }
}