import * as picturesServices from './pictures.services.js';

export async function getAll(req, res) {
  const pictures = await picturesServices.getAll();
  res.json(awards);
}

export async function create(req, res) {
  const body = req.body;
  const pictures = await picturesServices.create({ body });
  res.json(pictures);
}

export async function update(req, res) {
  const { id } = req.params;
  const propsToUpdate = req.body;
  const updatedProps = await picturesServices.update({ id, propsToUpdate });
  res.json(updatedProps);
}