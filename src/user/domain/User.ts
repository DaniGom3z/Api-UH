import { Enclosure } from "@prisma/client";

export class User {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly enclosure?: Enclosure[], // Hacer enclosure opcional añadiendo "?" al final
  ) {}
}
