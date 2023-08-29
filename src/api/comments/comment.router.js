import Router from 'express';
import * as commentController from './comment.controller.js';

const router = Router();

router.get('/comments/all', commentController.getAllComment);
router.get('/:pictureId/comments', commentController.getAllByPictureId);

router.post('/comments', commentController.createComment);

router.patch('/comments/:id', commentController.updateComment);
router.patch('/comments/:id', commentController.patchIdComment);

router.delete('/comments/:id', commentController.removeComment);

export default router;
