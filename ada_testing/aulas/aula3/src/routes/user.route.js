import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers } from '../controllers/user.controller.js';

export const userRoute = new Router();

userRoute.get('/', getUsers);
userRoute.get('/:id', getUserById);
userRoute.post('/', createUser);
userRoute.delete('/:id', deleteUser);
