import { Request, Response, NextFunction } from 'express';
export default class AuthMiddleware {
    verifyToken(req: Request, res: Response, next: NextFunction): void;
}
