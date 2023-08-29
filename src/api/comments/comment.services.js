import * as commentRepo from './comment.repository.js';

export async function getAllComment() {
  const comment = await commentRepo.getAllComment();
  return comment;
}

export async function createComment({ body }) {
  const comment = await commentRepo.createComment({ body });
  return comment;
}

export async function updateComment({ id, propsToUpdate }) {
  const updatedProps = await commentRepo.updateComment({ id, propsToUpdate });
  return updatedProps;
}

export async function getAllByPictureId({ id }) {
  const comment = await commentRepo.getAllByPictureId({ id });
  return comment;
}

export async function patchIdComment({ id, newProps }) {
  const updatedComment = await commentRepo.patchIdComment({ id, newProps });
  return updatedComment;
}

export async function removeComment(req, res) {
  const { id } = req.params;
  const nonDeletedComment = await commentRepo.removeComment({ id });
  res.json(nonDeletedComment);
}