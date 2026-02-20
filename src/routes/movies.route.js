import { Router } from "express";
import { getMovies, createMovie } from "../controllers/movies.controllers.js";

const movieRoute = Router();

movieRoute.get("/", getMovies);
movieRoute.post("/", createMovie);

export default movieRoute;
