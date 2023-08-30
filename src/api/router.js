import Router from 'express';
import picturesRouter from './pictures/pictures.router.js';
import commentsRouter from './comments/comment.router.js';
import multer from 'multer'
//import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('../images', import.meta.url))
console.log('root', __dirname)
const diskstorage = multer.diskStorage({
  destination: ( req , file , cb) => {
    cb(null , __dirname)
  },
  filename: (req , file , cb) => {
    cb(null , Date.now() + file.originalname)
  }
})

const fileUpload = multer({
  storage: diskstorage
}).single('image')

const router = Router();
router.use('/pictures', fileUpload, picturesRouter);
router.use('/comments', commentsRouter);
export default router;
