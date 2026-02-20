import express from "express";
import movieRoute from "./routes/movies.route.js"
const app = express()

const port = 3005;

// Middleware do parsowania JSON
app.use(express.json());

// Prosty endpoint testowy
app.get("/", (req, res) => {
  res.send("hello world");
});


app.use("/", movieRoute)


// Start serwera
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
