import express from "express";
import cors from "cors";
import { UsersService } from "./modules/users/users.service";
import postsRoutes from "./modules/posts/posts.routes";
import { PostsController } from "./modules/posts/posts.controllers";
import path from "node:path";
const app = express();
app.use(cors());           // Cho phép gọi từ frontend
app.use(express.json());   // parse JSON body

app.post("/register", (req, res) => {
  try {
    const result = UsersService.register(req.body);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/login", (req, res) => {
  try {
    const result = UsersService.login(req.body);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// app.post("/posts", PostsController.createPost);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/posts", postsRoutes);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
