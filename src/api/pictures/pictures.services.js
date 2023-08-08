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
