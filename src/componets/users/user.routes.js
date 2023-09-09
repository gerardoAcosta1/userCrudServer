import { Router } from "express";
import { getAllUsers, addNewUser, getUserById, updateUserById, deleteUserById } from "./user.controllers.js";
const router = Router();

router.get('/users', getAllUsers)
router.post('/users', addNewUser)
router.get("/users/:id", getUserById)
router.put('/users/:id', updateUserById) 
router.delete("/users/:id",deleteUserById )

export default router;