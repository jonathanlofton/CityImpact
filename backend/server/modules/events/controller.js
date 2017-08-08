import Event from './model';

export const createEvent = async (req, res) => {
  const { title, description } = req.body;
  const newEvent = new Event({ title, description });

  try {
    return res.status(201).json({ event: await newEvent.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Event' });
  }
};

export const getAllEvents = async (req, res) => {

  try {
    return res.status(200).json({ events: await Event.find({})});
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Event' });
  }
};
