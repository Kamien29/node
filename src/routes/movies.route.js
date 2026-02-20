import{router} from"express"
const movieRoute = Router();
// Nasze routingi


const movies = [
   
    
]
app.get("/api/movies", (req, res) => {
  const movies = [
    { title: "avatar", director: "James Cameron" },
    { title: "interstellar", director: "Christopher Nolan" },
     {"title": "Dead poets society", 
        "director": "idkman",
        "year" : 2006
    },
    {"title": "Mateusz w ogrodzie Walasa",
        "director": "Piotr Obara",
        "year": 2026
    }
  ];
  res.json(movies);
});

movieRoute.post("/api/movies", (req,res,next))