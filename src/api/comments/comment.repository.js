import commentModel from './comment.model.js';

export async function getAllComment() {
  const comment = await commentModel
    .find()
    .lean();
  return comment;
}

export async function createComment({ body }) {
  const newComment = await commentModel
    .create(body);
  return newComment;
}

export async function updateComment({ id, propsToUpdate }) {
  const updatedProps = await commentModel
    .findByIdAndUpdate({ _id: id }, propsToUpdate, { new: true });
  return updatedProps;
}

export async function getAllByPictureId({ id }) {
  const user = await commentModel
    .findById(id)
    .lean();

  return user;
}

export async function patchIdComment({ id, newProps }) {
  const query = { _id: id };
  const updatedUser = await commentModel.findOneAndUpdate(query, newProps, { new: true })
    .lean();
  return updatedUser;
}

export async function removeComment({ id }) {
  const deletedPictures = await commentModel.findByIdAndDelete(id);
  return deletedPictures;
}
