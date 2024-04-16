import { Request, Response } from "express";

import { GetAllEnclosuresUseCase } from "../../application/GetAllEnclosuresUseCase";

export class GetAllEnclosuresController {
  constructor(readonly getAllenclosuresUseCase: GetAllEnclosuresUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const enclosures = await this.getAllenclosuresUseCase.run();
      if (enclosures)
        //Code HTTP : 200 -> Consulta exitosa
        res.status(200).send({
          status: "success",
          data: enclosures.map((enclosure: any) => {
            return {
              id: enclosure.id,
              name: enclosure.name,
              typeOfFood: enclosure.typeOfFood,
              vaccine: enclosure.vaccine,
              id_data:enclosure.id_data
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}