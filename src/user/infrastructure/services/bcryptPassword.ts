import bcrypt from "bcrypt";

import { PasswordHasher } from "../../domain/PasswordHashed";

export class BcryptPasswordHasher implements PasswordHasher {
    private readonly saltRounds=10;

    async hashPassword(password: string): Promise<string> {
        const hashedPassword = await bcrypt.hash(password, this.saltRounds);
        return hashedPassword
    }
}