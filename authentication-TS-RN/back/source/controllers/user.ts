
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import User from '../models/user';
import jwt from 'jsonwebtoken'



const register = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(401).json({
                message: hashError.message,
                error: hashError
            });
        }

        const _user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            password: hash
        });

        return _user
            .save()
            .then((user) => {
                return res.status(201).json({
                    user
                });
            })
            .catch((error) => {
                return res.status(500).json({
                    message: error.message,
                    error
                });
            });
    });
};
const login = (req: Request, res: Response, next: NextFunction) => {
    let { username, password } = req.body;

    User.find({ username })
        .exec()
        .then((users) => {
            if (users.length !== 1) {
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }
           
            bcryptjs.compare(password, users[0].password, (error, result) => {
              if (!result) {
                    return res.status(401).json({
                        message: 'Password doesn\'t match'
                    });
                } else {
                 
                    const payload = { username: users[0].username};
                    const secret = 'mysecretkey';
                    const options = { expiresIn: '1h' };
                    const token = jwt.sign(payload, secret, options);
                    
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token,
                        user: users[0]
                    });
                }
            });
            
            
            
            
        
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};


export default { register, login };
