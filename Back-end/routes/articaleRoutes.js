import express from 'express';
import { createArticale , getAllArticale , getArticaleById, updatearticale, deleteArticale} from "../controller/articaleController.js"

const router=express.Router();


router.get('/', createArticale )
router.post('/create',getAllArticale)
router.get('/:id',getArticaleById)
router.patch('/:id',updatearticale)
router.delete('/:id',deleteArticale)

export default router