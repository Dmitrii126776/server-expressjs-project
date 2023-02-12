import {Router} from "express";
import userGetUsers from "./user-getUsers";
import userLogin from "./user-login";
import userRegistration from "./user-regisrtation";
import userLogout from "./user-logout";
import userActivateLink from "./user-activate-link";
import userRefresh from "./user-refresh";

const userRouter = Router()

userRouter.post('/registration', userRegistration);
userRouter.post('/login', userLogin);
userRouter.post('/logout', userLogout);
userRouter.get('/activate/link', userActivateLink);
userRouter.get('/refresh', userRefresh);
userRouter.get('/users', userGetUsers);

export default userRouter;
