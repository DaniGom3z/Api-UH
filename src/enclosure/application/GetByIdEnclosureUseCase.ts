import { Enclosure } from "../domain/entities/Enclosure";
import { EnclosureRepository } from "../domain/repository/EnclosureRepository";

export class GetByIdEnclosureUseCase {
  constructor(readonly enclosureRepository: EnclosureRepository) {}

  async run(id: number): Promise<Enclosure | null> {
    try {
      const result = await this.enclosureRepository.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}