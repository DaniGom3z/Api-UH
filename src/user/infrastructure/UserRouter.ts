import express from 'express';
import { loginUserController,createUserController, getByIdUserController, deleteUserController } from "./dependencies";
export const userRouter = express.Router();


userRouter.post("/login",loginUserController.run.bind(loginUserController))
userRouter.post("/",createUserController.run.bind(createUserController));
userRouter.get("/:id",getByIdUserController.run.bind(getByIdUserController));
userRouter.delete("/:id",deleteUserController.run.bind(deleteUserController));
