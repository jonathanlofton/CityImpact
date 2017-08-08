import Meetup from './model';

export const createMeetup = async (req, res) => {
  const { title, description } = req.body;
  const newMeetup = new Meetup({ title, description });

  try {
    return res.status(201).json({ meetup: await newMeetup.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Meetup' });
  }
};

export const getMeetups = (req, res) => {
  const meetups = {};
  try {
    console.log(req);
    return;
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Meetups' });
  }
}
