import express from 'express';
import verifyToken from './middleware/verifyToken';
import { loginUserController, createUserController, getByIdUserController, deleteUserController } from "./dependencies";

export const userRouter = express.Router();

// Ruta de inicio de sesión sin verificación de token
userRouter.post("/login", loginUserController.run.bind(loginUserController));

// Aplicar el middleware de verificación de token a todas las demás rutas
userRouter.use(verifyToken);

// Rutas que requieren autenticación
userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.get("/:id", getByIdUserController.run.bind(getByIdUserController));
userRouter.delete("/:id", deleteUserController.run.bind(deleteUserController));

export default userRouter;
