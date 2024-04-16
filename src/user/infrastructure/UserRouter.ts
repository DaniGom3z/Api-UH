import express from 'express';
import { createUserController, getByIdUserController, deleteUserController } from "./dependencies";
export const userRouter = express.Router();


userRouter.post("/",createUserController.run.bind(createUserController));
userRouter.get("/:id",getByIdUserController.run.bind(getByIdUserController));
userRouter.delete("/:id",deleteUserController.run.bind(deleteUserController));
