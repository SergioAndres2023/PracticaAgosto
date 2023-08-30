import * as picturesServices from './pictures.services.js';
import fs from 'fs'
//import path from 'path'
import { fileURLToPath } from 'url'



export async function getAll(req, res) {
  const pictures = await picturesServices.getAll();
  res.json(pictures);
}

export async function create(req, res) {
  const __dirname = fileURLToPath(new URL('./images/', import.meta.url))
  console.log('hola', req.file )

  const type = req.file.mimetype
  const name = req.file.originalname
  const data = fs.readFileSync(__dirname, './images/' + req.file.filename)

  const body = {
    image : data,
    description : req.description,
    title : req.title
  }
  console.log(body)
  const pictures = await picturesServices.create({ body });
  
  res.send('imagen guardada!')
}

export async function update(req, res) {
  const { id } = req.params;
  const propsToUpdate = req.body;
  const updatedProps = await picturesServices.update({ id, propsToUpdate });
  res.json(updatedProps);
}

export async function getById(req, res) {
  const { id } = req.params;
  const picturesById = await picturesServices.getById({ id });
  res.json(picturesById);
}

export async function patchId(req, res) {
  const { id } = req.params;
  const newProps = req.body;
  if (newProps) {
    res.startus(401);
    res.json('This property cant be updeted');
  }
  const updatedPictures = await picturesServices.patchId({ id, newProps });
  res.json(updatedPictures);
}

export async function remove(req, res) {
  const { id } = req.params;
  const nonDeletedPictures = await picturesServices.remove({ id });
  res.json(nonDeletedPictures);
}
