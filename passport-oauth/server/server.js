import session from "express-session";
import express from "express";
import cors from "cors";
import "./passport.js"; 
import passport from "passport";
import authRoute from "./routes/auth.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(
  session({
    secret: "lama",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } 
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(3000, () => {
  console.log("Server is running!");
});
