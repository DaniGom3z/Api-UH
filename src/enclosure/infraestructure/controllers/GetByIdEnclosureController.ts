import { Request, Response } from "express";
import { GetByIdEnclosureUseCase } from "../../application/GetByIdEnclosureUseCase";
import { addDays, isAfter } from "date-fns"; // Importa las funciones necesarias de date-fns

export class GetByIdEnclosureController {
  constructor(readonly getByIdEnclosureUseCase: GetByIdEnclosureUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const enclosure = await this.getByIdEnclosureUseCase.run(id);

      if (enclosure) {
        let { datos, ...enclosureData } = enclosure;

        const threeDaysAgo = addDays(new Date(), -3);
        datos = datos.filter(data => isAfter(new Date(data.date), threeDaysAgo));

        res.status(200).send({
          status: "success",
          data: {
            ...enclosureData, 
            datos, 
          },
        });
      } else {
        res.status(400).send({
          status: "error",
          msn: "Ocurrió algún problema",
        });
      }
    } catch (error: any) {
      res.status(500).send({
        status: "error",
        message: "Ocurrió un error interno",
        error: error.message,
      });
    }
  }
}
