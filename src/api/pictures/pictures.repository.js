import picturesModel from './pictures.model.js';

export async function getAll() {
  const pictures = await picturesModel
    .find()
    .lean();
  return pictures;
}

export async function create({ body }) {
  const pictures = await picturesModel
    .create(body);
  return pictures;
}

export async function update({ id, propsToUpdate }) {
  const updatedProps = await picturesModel
    .findByIdAndUpdate({ _id: id }, propsToUpdate, { new: true });
  return updatedProps;
}

export async function getById({ id }) {
  const user = await picturesModel
    .findById(id)
    .lean();

  return user;
}

export async function patchId({ id, newProps }) {
  const query = { _id: id };
  const updatedUser = await picturesModel.findOneAndUpdate(query, newProps, { new: true })
    .lean();
  return updatedUser;
}

export async function remove({ id }) {
  const deletedPictures = await picturesModel.findByIdAndDelete(id);
  return deletedPictures;
}
