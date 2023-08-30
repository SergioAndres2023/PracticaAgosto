import Router from 'express';
import * as picturesController from './pictures.controller.js';


const router = Router();

router.get('/all', picturesController.getAll);
router.get('/:id', picturesController.getById);

router.post('/', picturesController.create);

router.patch('/:id', picturesController.update);
router.patch('/:id', picturesController.patchId);

router.delete('/:id', picturesController.remove);

export default router;
