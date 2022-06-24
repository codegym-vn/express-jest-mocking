"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthMiddleware {
    verifyToken(req, res, next) {
        console.log('Actual implemetation of verifyToken is called!');
        next();
    }
}
exports.default = AuthMiddleware;
//# sourceMappingURL=auth.js.map