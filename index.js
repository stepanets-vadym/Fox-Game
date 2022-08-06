
const 
  // * Libraries
  express             = require('express'),
  config              = require('./config/db'),
  mongoose            = require('mongoose'),
  chalk               = require('chalk'),
  path                = require('path'),
  cors                = require('cors'),
  app                 = express(),
  // * Route path
  users               = require('./routes/users/users'),
  games               = require('./routes/games/games'),
  categorys               = require('./routes/categorys/categorys'),

  // * Local
  port                = process.env.PORT || 8080,
  log                 = console.log,
  mongodb             = config.db,
  backendUrl          = '/api';


//* Config
app.use(express.json());
app.use(express.static('finalproject/build'));
// app.use(express.static('fronten/build'));
app.use(cors());


// * Config DB
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Aliensky', // ? will render to DB - defaul DB name
});



// * Hooks
mongoose.connection.on('connected', () => {
  log(chalk.green.underline('Connected to DB !'));
});

mongoose.connection.on('error', (error) => {
  log(chalk.magenta('Connected to DB  failed: ') + chalk.red(error));
})

// * Conect to DB
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'stepanets'});
mongoose.connection.on('connectede', ()=>{
  log(chalk.green.underline('Connected to DB !'));
});

// *Routes
app.use(backendUrl + '/users', users);
app.use(backendUrl + '/games', games);
app.use(backendUrl + '/categorys', categorys);


// * default routes
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'finalproject/build/index.html'));
});
// app.get('*', (request, response) => {
//   // log(request)
//   response.sendFile(path.join(__dirname, 'fronten/build/index.html'));
// });

app.listen(port, () => {
  log(
    chalk.bgWhite.black(' App has been started in port: ') +
      chalk.red.bgWhite.bold(port + '')
  );
});
