import express from 'express';
import { createEnclosureController, getByIdEnclosureController, deleteEnclosureController,getAllEnclosuresController } from "./dependencies";
export const enclosureRouter = express.Router();


enclosureRouter.post("/",createEnclosureController.run.bind(createEnclosureController));
enclosureRouter.get("/:id",getByIdEnclosureController.run.bind(getByIdEnclosureController));
enclosureRouter.get("/",getAllEnclosuresController.run.bind(getAllEnclosuresController));
enclosureRouter.delete("/:id",deleteEnclosureController.run.bind(deleteEnclosureController));
