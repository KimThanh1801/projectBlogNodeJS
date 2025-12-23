// src/services/UsersService.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { LoginUserDto, RegisterUserDto } from "./dto/users.dto";


// Fake database tạm thời
const users: any[] = [];

export class UsersService {
  // Đăng ký user
  static register(data: RegisterUserDto) {
    // Kiểm tra email đã tồn tại chưa
    const existingUser = users.find(u => u.email === data.email);
    if (existingUser) throw new Error("Email đã tồn tại");

    // Mã hóa mật khẩu
    const hashedPassword = bcrypt.hashSync(data.password, 8);

    // Tạo user mới
    const newUser = { id: users.length + 1, ...data, password: hashedPassword };
    users.push(newUser);

    // Tạo JWT token
    const token = jwt.sign(
      { id: newUser.id },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "24h" }
    );

    return { user: newUser, token };
  }

  // Đăng nhập user
  static login(data: LoginUserDto) {
    const user = users.find(u => u.email === data.email);
    if (!user) throw new Error("Email không tồn tại");

    const passwordIsValid = bcrypt.compareSync(data.password, user.password);
    if (!passwordIsValid) throw new Error("Mật khẩu không đúng");

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "24h" }
    );

    return { user, token };
  }
  static getUserById(id: number) {
    return users.find(u => u.id === id);
  }
}
