import { Request, Response } from "express";
import { GetByIdUserUseCase } from "../../application/GetByIdUserUseCase";

export class GetByIdUserController {
  constructor(readonly getByIdUserUseCase: GetByIdUserUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const user = await this.getByIdUserUseCase.run(id);

      if (user) {
        // Obtener los enclosures asociados al usuario
        const { enclosure, ...userData } = user;

        // Code HTTP: 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            ...userData, // Datos del usuario
            enclosure, // Enclosures asociados al usuario
          },
        });
      } else {
        // Code HTTP: 400 -> Error de solicitud
        res.status(400).send({
          status: "error",
          msn: "No se encontró el usuario",
        });
      }
    } catch (error: any) {
      // Code HTTP: 500 -> Error interno del servidor
      res.status(500).send({
        status: "error",
        message: "Ocurrió un error interno",
        error: error.message,
      });
    }
  }
}
