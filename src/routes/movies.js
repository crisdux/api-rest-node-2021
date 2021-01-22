const {Router} = require('express');
const router = Router();
const movies = require('../sample.json');
const {INTERNAL_SERVER_ERROR} = require('../status');
router.get('/', (req, res)=> {
    res.json(movies)
})

router.post('/', (req, res)=> {
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        movies.push(newMovie)
        res.json(movies)
    }else{
        res.end("Error")
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        movies.map((movie,index) => {
            if(movie.id === id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
    }else{
        res.status(INTERNAL_SERVER_ERROR.error).json({error: INTERNAL_SERVER_ERROR.mensaje});
        console.error(INTERNAL_SERVER_ERROR.mensaje);
    }
    res.json(movies);

})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    movies.map((movie, index) => {
        if(movie.id === id) {
            movies.splice(index,1)
        }
    });
    res.send(movies);
});


module.exports = router;