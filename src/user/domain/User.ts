import { Datos } from "@prisma/client";

export class User {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly datos?: Datos[], // Hacer enclosure opcional añadiendo "?" al final
  ) {}
}
