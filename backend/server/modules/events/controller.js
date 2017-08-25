import Event from './model';

export const createEvent = async (req, res) => {
  const { title, description, latitude, longitude, time, date, host, address } = req.body;
  const newEvent = new Event({
    title, description, latitude, longitude, time, date, address, host: host.id
  });
  console.log(`NEW EVENT ${newEvent}`);
  try {
    return res.status(201).json(await newEvent.save());
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Event' });
  }
};


export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).populate('host')
      .exec((err, events) => {
        if (err) {
          return handleError(err);
        }
      });
    return res.status(200).json(events)
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
    return res.status(200).json(await Event.findById(eventId)); //.populate('group', 'name'),
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch event' });
  }
};

export const deleteAnEvent = async (req, res) => {
  const { eventId } = req.params;

  if (!eventId) {
    return res.status(400).json({ error: true, message: 'No Event Id' });
  }

  // Search for see if group exist
  const event = await Event.findById(eventId);


  try {
    Event.remove({'_id': eventId}, (result) => {
    return res.send(result);
  });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch/delete event' });
  }
};

// export const updateAnEvent = async (req, res) => {
//   const { eventId } = req.params;
//   const update = req.body;
//   console.log(req);
//   console.log(update);
//
//   if (!eventId) {
//     return res.status(400).json({ error: true, message: 'No Event Id' });
//   }
//
//   const event = await Event.findById(eventId);
//
//   try {
//     Event.update({"_id":eventId}, update,
//     function (err) {
//       console.log(err);
//       res.sendStatus(202);
//   }
// )}
//    catch (e) {
//     return res.status(400).json({ error: true, message: 'Cannot fetch/delete event' });
//   }
// };

export const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const { attendees } = req.body;

  if (!eventId) {
    return res.status(400).json({ error: true, message: 'No Event Id' });
  }

  try {
    const event = await Event.findById(eventId);
    await event.update({ attendees });
      // .populate('attendees')
      // .exec(err => {
      //   if (err) {
      //     return handleError(err);
      //   }
      // });
    return res.status(200).json({ event });
  } catch (e) {
    return res.status(404).json({ error: true, message: 'Cannot update event' });
  }
};
