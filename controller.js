const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = require('../data/users');

const SECRET = 'secret_key';

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: 'User exists' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: users.length + 1,
    email,
    password: hashedPassword
  };

  users.push(user);

  res.status(201).json({ message: 'User created' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};

exports.me = (req, res) => {
  res.json({ user: req.user });
};
