//thirdPartPackages//
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

//myCreatePackages//
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

mongoose.set('strictQuery', false);

const app = express();

//connectDB//
mongoose.connect('mongodb://127.0.0.1:27017/smartEduDB').then(() => {
  console.log('smartEduDB connected successfuly!');
});

// templateEngine //
app.set('view engine', 'ejs');

// middleWares //
app.use(express.static('public')); // static file -> public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`smartEdu started on port: ${port}`);
});
