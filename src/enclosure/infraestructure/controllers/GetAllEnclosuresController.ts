import { Request, Response } from "express";
import { GetAllEnclosuresUseCase } from "../../application/GetAllEnclosuresUseCase";

export class GetAllEnclosuresController {
  constructor(readonly getAllenclosuresUseCase: GetAllEnclosuresUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const enclosures = await this.getAllenclosuresUseCase.run();
      
      if (enclosures) {
        const data = enclosures.map(enclosure => ({
          name: enclosure.name,
          datos: enclosure.datos
        }));

        res.status(200).send({
          status: "success",
          data: data.flat(), 
        });
      } else {
        res.status(400).send({
          status: "error",
          msn: "Ocurrió algún problema al obtener los encierros",
        });
      }
    } catch (error: any) { 
      console.error("Error al obtener los encierros:", error);
      res.status(500).send({
        status: "error",
        message: "Ocurrió un error interno al obtener los encierros",
        error: error.message,
      });
    }
  }
}
