import commentModel from './comment.model.js';

export async function getAll() {
  const comment = await commentModel
    .find()
    .lean();
  return comment;
}

export async function create({ body }) {
  const newComment = await commentModel
    .create(body);
  return newComment;
}

export async function update({ id, propsToUpdate }) {
  const updatedProps = await commentModel
    .findByIdAndUpdate({ _id: id }, propsToUpdate, { new: true });
  return updatedProps;
}

export async function findById({ id }) {
  const user = await commentModel
    .findById(id)
    .lean();

  return user;
}

export async function patchId({ id, newProps }) {
  const query = { _id: id };
  const updatedUser = await commentModel.findOneAndUpdate(query, newProps, { new: true })
    .lean();
  return updatedUser;
}

export async function remove({ id }) {
  const deletedPictures = await commentModel.findByIdAndDelete(id);
  return deletedPictures;
}
