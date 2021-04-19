import { NextFunction, Request, Response } from 'express';

export class Credential {
  static checkUserCredentials(req: Request, res: Response, next: NextFunction) {
    if (
      !req.signedCookies ||
      typeof req.signedCookies.user === 'undefined' ||
      req.signedCookies.user.verified === false
    ) {
      res.setHeader('WWW-Authenticate', 'Basic');
      return res.sendStatus(401);
    }
    next();
  }
}
