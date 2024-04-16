import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/repository/UserRepository";

export class MysqlUserRepository implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getById(userId: number): Promise<User | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          enclosure: true,
        },
      });
  
      if (!user) return null;
  
      return new User(
        user.id,
        user.name,
        user.email,
        user.password,
        user.enclosure // Incluir los enclosures asociados al usuario
      );
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return null;
    }
  }
  

  async deleteUser(id: number): Promise<User | null> {
    try {
      const deletedUser = await this.prisma.user.delete({
        where: {
          id: id,
        },
      });
      return new User(deletedUser.id, deletedUser.name, deletedUser.email, deletedUser.password);
    } catch (error) {
      console.error("Error deleting user:", error);
      return null;
    }
  }

  async createUser(name: string, email: string, password: string): Promise<User | null> {
    try {
      const createdUser = await this.prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
      return new User(createdUser.id, createdUser.name, createdUser.email, createdUser.password);
    } catch (error) {
      console.error("Error creating user:", error);
      return null;
    }
  }

  async getByEmail(email: string): Promise<User | null> {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email: email,
        },
        include: {
          enclosure: true,
        },
      });

      if (!user) return null;

      return new User(user.id, user.name, user.email, user.password);
    } catch (error) {
      console.error("Error fetching user by email:", error);
      return null;
    }
  }
}
