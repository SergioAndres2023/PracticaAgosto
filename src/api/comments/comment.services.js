import * as commentRepo from './comment.repository.js';

export async function getAll() {
  const comment = await commentRepo.getAll();
  return comment;
}

export async function create({ body }) {
  const comment = await commentRepo.create({ body });
  return comment;
}

export async function update({ id, propsToUpdate }) {
  const updatedProps = await commentRepo.update({ id, propsToUpdate });
  return updatedProps;
}

export async function findById({ id }) {
  const comment = await commentRepo.findById({ id });
  return comment;
}

export async function patchId({ id, newProps }) {
  const updatedComment = await commentRepo.patchId({ id, newProps });
  return updatedComment;
}

export async function remove(req, res) {
  const { id } = req.params;
  const nonDeletedComment = await commentRepo.remove({ id });
  res.json(nonDeletedComment);
}
