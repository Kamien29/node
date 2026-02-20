export function getMovies(req, res) {
  const movies = [
    { title: "avatar", director: "James Cameron" },
    { title: "interstellar", director: "Christopher Nolan" },
    {
      title: "Dead poets society",
      director: "idkman",
      year: 2006
    },
    {
      title: "Mateusz w ogrodzie Walasa",
      director: "Piotr Obara",
      year: 2026
    }
  ];

  res.json(movies);
}

export function createMovie(req, res, next) {
  const movie = req.body;

  if (!movie.title) {
    return next(new Error("Provide title"));
  }

  res.status(201).json({
    message: "Dodano film",
    ...movie
  });
}
