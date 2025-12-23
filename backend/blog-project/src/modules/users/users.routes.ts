import { Router } from "express";
import { UsersController } from "./users.controllers";

const router = Router();

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);

export default router;
