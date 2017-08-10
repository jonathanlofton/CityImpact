import User from './model';

export const createUser = async (req, res) => {
  const { username, email, passwordDigest } = req.body;
  const newUser = new User({ username, email, passwordDigest });
  
  try {
    return res.status(201).json({ user: await newUser.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with User Sign Up' });
  }
};

export const getAllUsers = async (req, res) => {

  try {
    return res.status(200).json({ users: await User.find({})});
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Users Fetch' });
  }
};
