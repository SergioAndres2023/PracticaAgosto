import * as picturesRepo from './pictures.repository.js';

export async function getAll() {
  const pictures = await picturesRepo.getAll();
  return pictures;
}

export async function create({ body }) {
  const pictures = await picturesRepo.create({ body });
  return pictures;
}

export async function update({ id, propsToUpdate }) {
  const updatedProps = await picturesRepo.update({ id, propsToUpdate });
  return updatedProps;
}

export async function getById({ id }) {
  const user = await picturesRepo.getById({ id });
  return user;
}

export async function patchId({ id, newProps }) {
  const updatedUser = await picturesRepo.patchId({ id, newProps });
  return updatedUser;
}

export async function remove(req, res) {
  const { id } = req.params;
  const nonDeletedPictures = await picturesRepo.remove({ id });
  res.json(nonDeletedPictures);
}

// export async function remove({ id }) {
//   const {deletedUser} = await picturesRepo.remove({ id });
//   const nonDeletedUsers = await picturesRepo.getAll();
//   return nonDeletedUsers;
// }
