import express from "express";
const app = express();
const port = 3005;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/movies", (req, res) => {
  const movies = [
    { title: "avatar", director: "James Cameron" },
    { title: "interstellar", director: "Christopher Nolan" }
  ];
  res.json(movies);
});

app.post("/api/movies", (req, res) => {
  const movie = req.body;
  res.status(201).json({ message: "dodano film", ...movie });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
