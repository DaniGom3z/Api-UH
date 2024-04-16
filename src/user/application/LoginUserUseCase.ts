import { User } from "../domain/User";
import { UserRepository } from "../domain/repository/UserRepository";

export class LoginUserUseCase {
  constructor(readonly userRepository: UserRepository) {}
  async run(email: string,password:string): Promise<User | null> {
    try {
      const result = await this.userRepository.login(email,password);
      return result;
    } catch (error) {
      return null;
    }
  }
}
