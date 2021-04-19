import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { CreateUserDto } from '../dto/user.dto';
import { dtoValidationMiddleware } from '../utils/ValidationMiddleware';
import { CustomRouter } from './CustomRouter';

// /users
export class UsersRoutes extends CustomRouter {
  public routes(): Router {
    this.router.get('/', UserController.index);
    this.router.get('/:username', UserController.getByUsername);

    this.router.post(
      '/',
      dtoValidationMiddleware(CreateUserDto),
      UserController.create,
    );

    return this.router;
  }
}
