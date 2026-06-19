import express from "express"

import { registerUser } from "../Controller/user.controller.js";


const UserRouter = express.Router();

UserRouter.post('/Register',registerUser);

export default UserRouter;
