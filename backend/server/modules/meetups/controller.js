import Meetup from './model';

export const createMeetup = (req, res) => {
  const { title, description } = req.body;
  const newMeetup = new Meetup({ title, description });

  try {
    return res.status(201).json({ meetup: newMeetup.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Meetup' });
  }
};
