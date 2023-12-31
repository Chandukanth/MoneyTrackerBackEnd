const md5 = require("md5");
const User = require("../../models/User");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user.password !== md5(password)) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const session_id = user.session_id || Math.floor(Date.now());
    await User.update({ session_id }, { where: { id: user.id } });

    let data = { fullName: user.fullName, email: user.email, phoneNumber: user.phoneNumber, session_id: session_id, id: user.id }

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = login;
