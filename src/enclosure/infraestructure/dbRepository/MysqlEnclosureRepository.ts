import { PrismaClient } from "@prisma/client";
import { Enclosure } from "../../domain/entities/Enclosure";
import { EnclosureRepository } from "../../domain/repository/EnclosureRepository";

export class MysqlEnclosureRepository implements EnclosureRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<Enclosure[] | null> {
    try {
      return await this.prisma.enclosure.findMany({
        include: {
          datos: true, 
          user: true,
        },
      });
    } catch (error) {
      console.error("Error al obtener todos los encierros:", error);
      return null;
    }
  }
  
  async getById(enclosureId: number): Promise<Enclosure | null> {
    try {
      const enclosure = await this.prisma.enclosure.findUnique({
        where: {
          id: enclosureId,
        },
        include: {
          datos:true,
        },
      });
  
      if (!enclosure) return null;
  
      return enclosure;
    } catch (error) {
      console.error("Error al obtener el encierro por ID:", error);
      return null;
    }
  }
  
  async createEnclosure(
    name: string,
    typeOfFood: string,
    vaccine: string,
    userId: number
  ): Promise<Enclosure | null> {
    try {
      const createdEnclosure = await this.prisma.enclosure.create({
        data: {
          name,
          typeOfFood,
          vaccine,
          user: {
            connect: {
              id: userId, 
            }
          }
        },
        include: {
          datos: true, 
          user: true
        }
      });
      return createdEnclosure;
    } catch (error) {
      console.error("Error creating enclosure:", error);
      return null;
    }
  }
  
  async deleteEnclosure(enclosureId: number): Promise<boolean> {
    try {
      await this.prisma.enclosure.delete({
        where: {
          id: enclosureId,
        },
      });
      return true;
    } catch (error) {
      console.error("Error al eliminar el encierro:", error);
      return false;
    }
  }
}
