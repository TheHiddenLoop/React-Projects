import { Router } from "express";
import { addTodo, deleteTodo, getTodo, updateTodo } from "../controller/todoContoller.js";
export const todoRouter=Router();

todoRouter.get("/todo",getTodo)
todoRouter.post("/add",addTodo)
todoRouter.put("/update",updateTodo)
todoRouter.delete("/delete/:id", deleteTodo);





