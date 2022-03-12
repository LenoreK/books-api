// Modules and Globals
require ('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors')

// Express Settings
app.use(express.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Controllers & Routes
app.use('/books', require('./controllers/books'));

app.get('/', (req, res) => {
    res.render('/home')
});

app.get('*', (req, res) => {
    res.render('/error404')
});

app.get('/books/:id', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for only example.com.'})
  })

// Listen for Connections
app.listen(port)

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })