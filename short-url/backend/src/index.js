import express from "express";
import { appRoutes } from "./routes/routes.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors({
  origin:"http://localhost:5173",
  credentials:false
}))
app.use(express.json());
app.use("/short", appRoutes);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/short-url");
  console.log("Database connected");
  
  app.listen(3000, () => {
    console.log(`Server is running at: http://localhost:3000`);
  });
}

main();
