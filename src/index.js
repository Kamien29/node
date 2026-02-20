import express from "express";
import movieRoute from "./routes/movies.route.js";

const app = express();
const port = 3005;

app.use(express.json());

// główna ścieżka filmów
app.use("/api/movies", movieRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
