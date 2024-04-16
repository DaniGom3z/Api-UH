import { Enclosure } from "../domain/entities/Enclosure";
import { EnclosureRepository } from "../domain/repository/EnclosureRepository";

export class GetAllEnclosuresUseCase {
  constructor(readonly enclosureRepository: EnclosureRepository) {}

  async run(): Promise<Enclosure[] | null> {
    try {
      const result = await this.enclosureRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}