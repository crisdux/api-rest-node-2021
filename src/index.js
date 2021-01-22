const express = require('express');
const app = express();
const morgan = require('morgan')

//settings
app.set('port', process.env.PORT || 3000);
app.set('appName',"API REST CON NODE");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));
//server on
app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log(`Server on port ${app.get('port')}`);
});