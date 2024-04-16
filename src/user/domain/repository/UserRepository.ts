import { User } from "../User";

export interface UserRepository {
  getById(userId: number): Promise<User | null>;
  createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User | null>;
  deleteUser(id: number): Promise<User | null>;
}
