import { Router } from "express";

const defaultRoute = Router();

defaultRoute.get("/", (req, res) => {
  res.send("elozelo");
});

export default defaultRoute;