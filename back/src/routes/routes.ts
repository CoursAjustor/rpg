import { Router } from "express";
import { IndexController } from "../controllers/index.controller";
import { CustomRouter } from "./CustomRouter";
import { Generates } from './generates/generates';

export class Routes extends CustomRouter {
  public routes(): Router {
    const generates = new Generates()

    this.router.get('/', IndexController.index)
    this.router.use('/generates', generates.routes())

    return this.router
  }
}