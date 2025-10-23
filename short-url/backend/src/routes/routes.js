import { Router } from "express";
import { getAllLinks, redirectUrl, saveData } from "../controller/routesController.js";

export const appRoutes=Router();

appRoutes.post("/save", saveData);
appRoutes.get("/shorten/:id", redirectUrl);
appRoutes.get("/all", getAllLinks);