import { Schema, model } from 'mongoose';

const picturesSchema = new Schema({
  image: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const picturesModel = model('pictures', picturesSchema);

export default picturesModel;
