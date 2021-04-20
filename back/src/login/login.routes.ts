import { Router } from 'express';
import { CustomRouter } from '../utils/CustomRouter';
import { dtoValidationMiddleware } from '../utils/ValidationMiddleware';
import { LoginController } from './login.controller';
import { LoginDto } from './login.dto';

class LoginRoutes extends CustomRouter {
  public routes(): Router {
    this.router.post(
      '/',
      dtoValidationMiddleware(LoginDto),
      LoginController.login,
    );

    return this.router;
  }
}

export const loginRoutes = new LoginRoutes();
