import Router from 'express';
import * as commentController from './comment.controller.js';

const router = Router();

router.get('/all', commentController.getAll);
router.get('/:id', commentController.findById);

router.post('/', commentController.create);

router.patch('/:id', commentController.update);
router.patch('/:id', commentController.patchId);

router.delete('/:id', commentController.remove);

export default router;
