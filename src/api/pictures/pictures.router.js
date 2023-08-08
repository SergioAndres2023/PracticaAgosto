import Router from 'express';
import * as picturesController from './pictures.controller.js';

const router = Router();

router.get('/all', picturesController.getAll);
router.get('/:id', picturesController.getAll);

router.post('/', admin, picturesController.create);

router.patch('/:id', admin, picturesController.update);
router.delete('/:id', admin, picturesController.update);

export default router;