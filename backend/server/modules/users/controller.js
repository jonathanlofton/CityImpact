import User from './model';

export const createUser = async (req, res) => {
  const { title, description } = req.body;
  const newMeetup = new Meetup({ title, description });

  try {
    return res.status(201).json({ meetup: await newMeetup.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Meetup' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    return res.status(201).json({ meetup: await User.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Users' });
  }
};


// export const loginUser = (req, res) => {
//
// }
