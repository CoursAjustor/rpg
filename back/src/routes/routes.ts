import { Router } from 'express';
import { IndexController } from '../controllers/index.controller';
import { CustomRouter } from './CustomRouter';
import { UsersRoutes } from './users.routes';

export class Routes extends CustomRouter {
  public routes(): Router {
    this.router.get('/', IndexController.index);

    const usersRoutes = new UsersRoutes();
    this.router.use('/users', usersRoutes.routes());

    return this.router;
  }
}
