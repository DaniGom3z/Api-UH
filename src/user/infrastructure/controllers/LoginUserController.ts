import { Request, Response } from "express";
import { LoginUserUseCase } from "../../application/LoginUserUseCase";
import jwt from 'jsonwebtoken';

export class LoginUserController {
  constructor(readonly loginUserUseCase: LoginUserUseCase) {}

  async run(req: Request, res: Response) {
    const { email, password }: { email: string, password: string } = req.body;
    try {
      const user = await this.loginUserUseCase.run(email, password);

      if (!user) {
        return res.status(400).json({ status: "error", message: "No se encontró el usuario y/o la contraseña es incorrecta" });
      }

      const token = jwt.sign({ userId: user.id }, 'clavecita', { expiresIn: '1h' }); 

      const { ...userData } = user;

      res.status(200).json({
        status: "success",
        ...userData,
        data: {
          token,
        },
      });
    } catch (error: any) {
      console.error("Error en el inicio de sesión:", error);
      res.status(500).json({ status: "error", message: "Ocurrió un error interno" });
    }
  }
}
