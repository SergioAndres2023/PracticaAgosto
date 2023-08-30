// import * as commentServices from './comment.services.js';

// export async function getAllComment(req, res) {
//   const comment = await commentServices.getAll();
//   res.json(comment);
// }

// export async function createComment(req, res) {
//   try {
//     const { text, pictureId } = req.body;
//     const comment = await commentServices.create({ text, pictureId });
//     res.json(comment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error al crear el comentario.' });
//   }
// }

// export async function updateComment(req, res) {
//   const { id } = req.params;
//   const propsToUpdate = req.body;
//   const updatedProps = await commentServices.update({ id, propsToUpdate });
//   res.json(updatedProps);
// }

// export async function getAllByPictureId(req, res) {
//   try {
//     const { CommentId } = req.params;
//     const comment = await commentServices.find({ CommentId });
//     res.json(comment);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error al obtener los comentarios.' });
//   }
// }

// export async function patchIdComment(req, res) {
//   const { id } = req.params;
//   const newProps = req.body;
//   if (newProps) {
//     res.startus(401);
//     res.json('This property cant be updeted');
//   }
//   const updatedComment = await commentServices.patchId({ id, newProps });
//   res.json(updatedComment);
// }

// export async function removeComment(req, res) {
//   const { id } = req.params;
//   const nonDeletedComment = await commentServices.remove({ id });
//   res.json(nonDeletedComment);
// }

import * as commentServices from './comment.services.js';

export async function getAll(req, res) {
  try {
    const comments = await commentServices.getAll();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los comentarios.' });
  }
}

export async function create(req, res) {
  try {
    const { text, pictureId } = req.body;
    const comment = await commentServices.create({ text, pictureId });
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el comentario.' });
  }
}

export async function update(req, res) {
  const { id } = req.params;
  const propsToUpdate = req.body;
  const updatedProps = await commentServices.update({ id, propsToUpdate });
  res.json(updatedProps);
}

export async function findById(req, res) {
  try {
    const { id } = req.params;
    const comments = await commentServices.findById({ id });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los comentarios.' });
  }
}

export async function patchId(req, res) {
  const { id } = req.params;
  const newProps = req.body;
  try {
    if (newProps) {
      res.status(401).json('Esta propiedad no puede ser actualizada');
    } else {
      const updatedComment = await commentServices.patchId({ id, newProps });
      res.json(updatedComment);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el comentario.' });
  }
}

export async function remove(req, res) {
  const { id } = req.params;
  const nonDeletedComment = await commentServices.remove({ id });
  res.json(nonDeletedComment);
}
