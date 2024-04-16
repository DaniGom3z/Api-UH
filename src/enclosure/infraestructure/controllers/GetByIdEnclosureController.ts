import { Request, Response } from "express";
import { GetByIdEnclosureUseCase } from "../../application/GetByIdEnclosureUseCase";

export class GetByIdEnclosureController {
  constructor(readonly getByIdEnclosureUseCase: GetByIdEnclosureUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const enclosure = await this.getByIdEnclosureUseCase.run(id);

      if (enclosure) {
        // Obtener los datos y el usuario asociados al encierro
        const { datos,  ...enclosureData } = enclosure;

        // Code HTTP: 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: {
            ...enclosureData, // Datos del encierro
            datos, // Datos asociados al encierro
          },
        });
      } else {
        // Code HTTP: 400 -> Error de solicitud
        res.status(400).send({
          status: "error",
          msn: "Ocurrió algún problema",
        });
      }
    } catch (error: any) { // Especificar el tipo de 'error'
      // Code HTTP: 500 -> Error interno del servidor
      res.status(500).send({
        status: "error",
        message: "Ocurrió un error interno",
        error: error.message,
      });
    }
  }
}