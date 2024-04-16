import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetByIdUserUseCase } from "../application/GetByIdUserUseCase";
import { GetByIdUserController } from "./controllers/GetByIdUserController";
import { DeleteUserUseCase } from "../application/DeleteUserUseCase";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { MysqlUserRepository } from "./dbRepository/MysqlUserRepository";

import { LoginUserController } from "./controllers/LoginUserController";
import { LoginUserUseCase } from "../application/LoginUserUseCase";

export const mysqlUserRepository = new MysqlUserRepository();

export const createUserUseCase = new CreateUserUseCase(mysqlUserRepository);

export const getByIdUserUseCase = new GetByIdUserUseCase(mysqlUserRepository);

export const createUserController = new CreateUserController(createUserUseCase);

export const getByIdUserController = new GetByIdUserController(
  getByIdUserUseCase
);

export const deleteUserUseCase = new DeleteUserUseCase(mysqlUserRepository);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);

export const loginUserUseCase = new LoginUserUseCase(mysqlUserRepository);

export const loginUserController = new LoginUserController(loginUserUseCase)
