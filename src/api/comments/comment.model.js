import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  pictureId: {
    type: Schema.Types.ObjectId,
    ref: 'pictures', // Referencia al modelo de imágenes
    required: true,
  },
});

const commentModel = model('comments', commentSchema);

export default commentModel;
