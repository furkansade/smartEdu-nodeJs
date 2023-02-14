const express = require('express');
const ejs = require('ejs');

const app = express();

// templateEngine //
app.set('view engine', 'ejs');

// middleWares //
app.use(express.static('public')); // static file -> public

app.get('/', (req, res) => {
  res.status(200).render('index', {
    pageName: 'index',
  });
});

app.get('/about', (req, res) => {
  res.status(200).render('about', {
    pageName: 'about',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`smartEdu started on port: ${port}`);
});
