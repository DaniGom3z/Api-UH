import express from 'express';
import verifyToken from './middleware/verifyToken';
import { createEnclosureController, getByIdEnclosureController, deleteEnclosureController, getAllEnclosuresController } from "./dependencies";

export const enclosureRouter = express.Router();

// Rutas que requieren autenticación
enclosureRouter.post("/", verifyToken, createEnclosureController.run.bind(createEnclosureController));
enclosureRouter.get("/:id", verifyToken, getByIdEnclosureController.run.bind(getByIdEnclosureController));
enclosureRouter.get("/", verifyToken, getAllEnclosuresController.run.bind(getAllEnclosuresController));
enclosureRouter.delete("/:id", verifyToken, deleteEnclosureController.run.bind(deleteEnclosureController));

export default enclosureRouter;
