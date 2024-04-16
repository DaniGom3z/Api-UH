import { User } from "../domain/User";
import { UserRepository } from "../domain/repository/UserRepository";
import { BcryptPasswordHasher } from "../infrastructure/services/bcryptPassword";

export class CreateUserUseCase {
  private readonly passwordHasher: BcryptPasswordHasher;

  constructor(private readonly userRepository: UserRepository) {
    this.passwordHasher = new BcryptPasswordHasher();
  }

  async run(
    name: string,
    email: string,
    password: string,
  ): Promise<User | null> {
    try {
      const hashedPassword = await this.passwordHasher.hashPassword(password);
      
      const user = await this.userRepository.createUser(
        name,
        email,
        hashedPassword,
      );

      return user;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
}