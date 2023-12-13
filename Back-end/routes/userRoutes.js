import express from 'express';
import { getAllUsers , createUser , getUserById, updateUser, deleteUser} from "../controller/userController.js"

const router=express.Router();


router.get('/', getAllUsers )
router.post('/create',createUser)
router.get('/:id',getUserById)
router.patch('/:id',updateUser)
router.delete('/:id',deleteUser)

export default router