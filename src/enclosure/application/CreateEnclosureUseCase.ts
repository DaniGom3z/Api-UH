import {Enclosure } from "../domain/entities/Enclosure";
import { EnclosureRepository } from "../domain/repository/EnclosureRepository";

export class CreateEnclosureUseCase {
    constructor(readonly enclosureRepository: EnclosureRepository) {}

  async run(
    name: string,
    typeOfFood: string,
    vaccine: string,
    userId:number
  ): Promise<Enclosure | null> {
    try {
      
      const enclosure = await this.enclosureRepository.createEnclosure(
        name,
        typeOfFood,
        vaccine,
        userId
      );

      return enclosure;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
}