import picturesModel from './pictures.model.js';

export async function getAll() {
  const pictures = await picturesModel
    .find({ deleted: false })
    .lean();
  return pictures;
}

export async function create({ body }) {
  const newAward = await picturesModel
    .create(body);
  return newAward;
}

export async function update({ id, propsToUpdate }) {
  const updatedProps = await picturesModel
    .findByIdAndUpdate({ _id: id }, propsToUpdate, { new: true });
  return updatedProps;
}