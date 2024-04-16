import { Enclosure } from "../entities/Enclosure";

export interface EnclosureRepository {
  getAll(): Promise<Enclosure[] | null>;
  getById(enclosureId: number): Promise<Enclosure | null>;
  createEnclosure(
    name: string,
    typeOfFood: string,
    vaccine: string,
    userId:number
  ): Promise<Enclosure | null>;
  
  deleteEnclosure(id: number): Promise<boolean>;
}
