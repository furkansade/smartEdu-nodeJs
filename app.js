//thirdPartPackages//
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

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

// middleWares //
app.use(express.static('public')); // static file -> public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleWaresEnd //

app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`smartEdu started on port: ${port}`);
});
