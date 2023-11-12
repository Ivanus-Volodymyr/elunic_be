import {IUser} from "../interfaces/user.inteface";
import {NextFunction, Request, Response} from "express";
import {userService} from "../services/user.service";
import {authService} from "../services/auth.service";

class UserController {
    public async users(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await userService.users();
            await res.json(users).status(200);
        } catch (e: any) {
            next(e);
        }
    }
}

export const userController = new UserController();
