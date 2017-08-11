import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    // required: true
  },
  longitude: {
    type: Number,
    // required: true
  },
  date: {
    type: String,
    // required: true
  },
  time: {
    type: String,
    // required: true
  }
});

export default mongoose.model('Event', EventSchema);
