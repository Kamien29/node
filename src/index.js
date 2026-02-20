import express from "express";
import movieRoute from "./routes/movies.route"
const movieRoute = express()

const app = express();
const port = 3005;

// Middleware do parsowania JSON
app.use(express.json());

// Prosty endpoint testowy
app.get("/", (req, res) => {
  res.send("hello world");
});

// Lista filmów (GET)


// Dodawanie filmu (POST)
app.post("/api/movies", (req, res) => {
  const movie = req.body;
  res.status(201).json({
    message: "dodano film",
    ...movie
  });
});

// Start serwera
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
