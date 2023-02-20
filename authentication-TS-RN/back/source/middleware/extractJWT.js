"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NAMESPACE = 'Auth';
const extractJWT = (req, res, next) => {
    // logging.info(NAMESPACE, 'Validating token');
    // let token = req.headers.authorization?.split(' ')[1];
    // if (token) {
    //     jwt.verify(token, config.server.token.secret, (error, decoded) => {
    //         if (error) {
    //             return res.status(404).json({
    //                 message: error,
    //                 error
    //             });
    //         } else {
    //             res.locals.jwt = decoded;
    //             next();
    //         }
    //     });
    // } else {
    //     return res.status(401).json({
    //         message: 'Unauthorized'
    //     });
    // }
};
exports.default = extractJWT;
