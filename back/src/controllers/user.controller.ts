import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  public static async index(
    req: Request,
    res: Response,
  ): Promise<Record<string, any>> {
    const users = await UserService.getAll();
    return res
      .json({
        users,
      })
      .status(200);
  }

  public static async getByUsername(req: Request, res: Response) {
    const {
      params: { username },
    } = req;
    const user = await UserService.getOne({ username });
    return res.status(200).json({ user });
  }

  public static async create(
    req: Request,
    res: Response,
  ): Promise<Record<string, any>> {
    const {
      body: { username, email, password },
    } = req;
    const users = await UserService.getFiltered({
      $or: [{ username }, { email }],
    });
    if (users.length) {
      return res.sendStatus(409);
    }

    const user = await UserService.create({ username, email, password });

    return res.status(201).json({
      user,
    });
  }
}
