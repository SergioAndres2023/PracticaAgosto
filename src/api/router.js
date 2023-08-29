import Router from 'express';
import picturesRouter from './pictures/pictures.router.js';

const router = Router();
router.use('/pictures', picturesRouter);
router.use('/comment', picturesRouter);
export default router;
