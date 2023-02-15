//thirdPartPackages//
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override');

//myCreatePackages//
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');

mongoose.set('strictQuery', false);

const app = express();

//connectDB//
mongoose.connect('mongodb://127.0.0.1:27017/smartEduDB').then(() => {
  console.log('smartEduDB connected successfuly!');
});
//connectDBEnd//

// templateEngine //
app.set('view engine', 'ejs');
// templateEngineEnd //

// globalVariable //
global.userIN = null;

// middleWares //
app.use(express.static('public')); // static file -> public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/smartEduDB',
    }),
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
// middleWaresEnd //

app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`smartEdu started on port: ${port}`);
});
