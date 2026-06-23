import express from "express"

import { LoginUser, LogoutUser, registerUser } from "../Controller/user.controller.js";


const UserRouter = express.Router();

UserRouter.post('/Register', registerUser);
UserRouter.get('/login', LoginUser);
UserRouter.get('/logout',LogoutUser);

export default UserRouter;
