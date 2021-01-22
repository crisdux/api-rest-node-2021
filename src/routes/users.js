const {Router} = require('express');
const router = Router();
const fetch = require('node-fetch');
const {INTERNAL_SERVER_ERROR} = require('../status');

router.get('/', async(req, res)=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);

})


module.exports = router;