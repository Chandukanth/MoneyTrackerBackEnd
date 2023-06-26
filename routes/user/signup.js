const { md5Password } = require("../../lib/utilis");
const User = require("../../models/User");

const signup = async (req, res) => {
    const { email, password, name, phone } = req.body;
    console.log("🚀 ~ file: auth.js:8 ~ router.post ~ req.body:", req.body)
    const fullName = name;
    const phoneNumber = phone;
    let newPassword = md5Password(password)
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        let createData = {
            email : email,
            password : newPassword,
            fullName:name,
            phoneNumber:phone
        }

        const newUser = await User.create(createData);

        return res.json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = signup;