import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

export default mongoose.model('Event', EventSchema);
