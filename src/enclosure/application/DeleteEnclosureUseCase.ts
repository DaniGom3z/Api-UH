import { EnclosureRepository } from "../domain/repository/EnclosureRepository";

export class DeleteEnclosureUseCase {
  constructor(readonly enclosureRepository: EnclosureRepository) {}

  async run(id: number): Promise<boolean> {
    try {
      const existingenclosure = await this.enclosureRepository.getById(id);

      if (!existingenclosure) {
        console.log("Encierro no encontrado");
        return false;
      }

      const deleted = await this.enclosureRepository.deleteEnclosure(id);
      console.log("Eliminación exitosa:", deleted);

      return deleted;
      
    } catch (error) {
      console.error("Error al eliminar el encierro:", error);
      return false;
    }
  }
}