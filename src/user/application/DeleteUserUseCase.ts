import { User } from "../domain/User";
import { UserRepository } from "../domain/repository/UserRepository";

export class DeleteUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(id: number): Promise<User | null> {
    try {
      const result = await this.userRepository.deleteUser(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}