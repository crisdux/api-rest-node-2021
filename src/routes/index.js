const {Router} = require('express');

const router = Router();

router.get('/', (req, res)=> {
    res.end("Hola")
})

module.exports = router;