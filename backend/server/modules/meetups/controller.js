import Meetup from './model';

export const createMeetup = async (req, res) => {
  const { title, description } = req.body;
  const newMeetup = new Meetup({ title, description });

  try {
    return res.status(201).json({ meetup: await newMeetup.save() });
  } catch (e) {
    return req.status(e.status).json({ error: true, message: 'Error with Meetup' });
  }
};
