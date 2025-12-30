const User = require('../models/User')
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

//Register User
exports.registerUser = (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    //validation
    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try{
        //check if user already exists
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "Email Already in Use" });
        }
    }

    //create new user
    
};

//Login User
exports.loginUser = (req, res) => {};

//Get User Profile
exports.getUserInfo = (req, res) => {};