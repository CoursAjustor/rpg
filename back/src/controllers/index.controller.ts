import { Request, Response } from "express";

export class IndexController {
  public static index(req: Request, res: Response): Record<string, any> {
    return res.json({
      message: "Hello boi",
    });
  }
}