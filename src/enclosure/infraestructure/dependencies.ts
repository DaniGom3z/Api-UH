import { CreateEnclosureUseCase } from "../application/CreateEnclosureUseCase";
import { CreateEnclosureController } from "./controllers/CreateEnclosureController";
import { GetByIdEnclosureUseCase } from "../application/GetByIdEnclosureUseCase";
import { GetByIdEnclosureController } from "./controllers/GetByIdEnclosureController";
import { GetAllEnclosuresUseCase } from "../application/GetAllEnclosuresUseCase";
import { GetAllEnclosuresController } from "./controllers/GetAllEnclosuresController";
import { DeleteEnclosureUseCase } from "../application/DeleteEnclosureUseCase";
import { DeleteEnclosureController } from "./controllers/DeleteEnclosureController";
import { MysqlEnclosureRepository } from "./dbRepository/MysqlEnclosureRepository";

export const mysqlEnclosureRepository = new MysqlEnclosureRepository();

export const createEnclosureUseCase = new CreateEnclosureUseCase(mysqlEnclosureRepository);

export const getByIdEnclosureUseCase = new GetByIdEnclosureUseCase(mysqlEnclosureRepository);

export const getAllEnclosuresUseCase = new GetAllEnclosuresUseCase(mysqlEnclosureRepository);

export const createEnclosureController = new CreateEnclosureController(createEnclosureUseCase);

export const getByIdEnclosureController = new GetByIdEnclosureController(getByIdEnclosureUseCase);

export const getAllEnclosuresController = new GetAllEnclosuresController(getAllEnclosuresUseCase);

export const deleteEnclosureUseCase = new DeleteEnclosureUseCase(mysqlEnclosureRepository);

export const deleteEnclosureController = new DeleteEnclosureController(deleteEnclosureUseCase);
  