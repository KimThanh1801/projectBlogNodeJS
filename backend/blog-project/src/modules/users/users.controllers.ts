import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
  static register(req: Request, res: Response) {
    try {
      const result = UsersService.register(req.body);
      res.status(201).json({ message: "Đăng ký thành công", ...result });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  static login(req: Request, res: Response) {
    try {
      const result = UsersService.login(req.body);
      res.status(200).json({ message: "Đăng nhập thành công", ...result });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
