const express = require('express');
const ejs = require('ejs');

const pageRoute = require('./routes/pageRoute')

const app = express();

// templateEngine //
app.set('view engine', 'ejs');

// middleWares //
app.use(express.static('public')); // static file -> public

app.use('/', pageRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`smartEdu started on port: ${port}`);
});
