import express from 'express';
import { mainGet, mainPost } from '../controllers';

const router = express.Router();

router.get('/', mainGet);
router.post('/', mainPost);

export const mainRouter = router;