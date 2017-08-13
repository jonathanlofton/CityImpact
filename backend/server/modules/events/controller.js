import Event from './model';

export const createEvent = async (req, res) => {
  const { title, description, latitude, longitude, time, date, address } = req.body;
  const newEvent = new Event({ title, description, latitude, longitude, time, date, address});

  try {
    return res.status(201).json({ event: await newEvent.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Event' });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    return res.status(200).json(await Event.find({}));
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Event' });
  }
};

export const getAnEvent = async (req, res) => {
  const { eventId } = req.params;

  if (!eventId) {
    return res.status(400).json({ error: true, message: 'No Event Id' });
  }

  // Search for see if group exist
  // const event = await Event.findById(eventId);


  try {
    return res.status(200).json({
      error: false,
      event: await Event.findById(eventId) //.populate('group', 'name'),
    });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch event' });
  }
};

export const deleteAnEvent = async (req, res) => {
  const { eventId } = req.params;

  console.log(eventId);

  if (!eventId) {
    return res.status(400).json({ error: true, message: 'No Event Id' });
  }

  // Search for see if group exist
  const event = await Event.findById(eventId);


  try {
     Event.remove({'_id': eventId}, (result) => {
      console.log(eventId);
    return res.send(result);
  });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch/delete event' });
  }
};

export const updateAnEvent = async (req, res) => {
  const { eventId } = req.params;
  const update = req.body;
  console.log(req);
  console.log(update);

  if (!eventId) {
    return res.status(400).json({ error: true, message: 'No Event Id' });
  }

  // Search for see if group exist
  const event = await Event.findById(eventId);


  try {
    Event.update({"_id":eventId}, update,
    function (err) {
      // if (err) return console.log(err);
      console.log(err);
      res.sendStatus(202);
  }
)}
   catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch/delete event' });
  }
};
