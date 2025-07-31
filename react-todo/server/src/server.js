import express, { json } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { todoRouter } from "./routes/todoRoutes.js";
import cors from "cors"
const app=express();
dotenv.config();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));

app.use(express.json())
app.use("/api",todoRouter)
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");
  app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
  });
}

main();