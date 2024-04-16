import { Request, Response } from "express";
import { DeleteEnclosureUseCase } from "../../application/DeleteEnclosureUseCase";

export class DeleteEnclosureController {
  constructor(readonly deleteEnclosureUseCase: DeleteEnclosureUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const deleted = await this.deleteEnclosureUseCase.run(id);

      if (deleted) {
        res.status(200).send({
          status: "success",
          data: {
            message: "Encierro eliminado correctamente",
          },
        });
      } else {
        res.status(404).send({
          status: "error",
          data: "El encierro no existe",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error durante la eliminación del comentario",
      });
    }
  }
}