import { Request, Response } from 'express';
import { LoginService } from './login.service';

export class LoginController {
  public static async login(
    req: Request,
    res: Response,
  ): Promise<Record<string, any>> {
    const { body } = req;

    try {
      const user = await LoginService.login(body);

      res.cookie('user', user.token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.sendStatus(200);
    } catch (e) {
      return res.status(e.statusCode).json({ ...e });
    }
  }
}
