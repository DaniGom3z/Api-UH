import { Datos } from "@prisma/client";

export class Enclosure {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly typeOfFood: string,
    readonly vaccine: string,
    readonly datos: Datos[],
    readonly userId: number,
  ) {}
}
