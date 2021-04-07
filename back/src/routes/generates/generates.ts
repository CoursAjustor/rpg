import { Request, Response, Router } from "express";
import { CustomRouter } from "../CustomRouter";

export class Generates extends CustomRouter {
  public routes(): Router {
    this.router.get('/', (req: Request, res: Response) => {
      return res.json({
        message: "Hi boi",
      });
    })

    return this.router
  }
}