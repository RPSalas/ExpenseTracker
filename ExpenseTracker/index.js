const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars');

//router variables for each page
//no router variables for this project

const PORT = process.env.PORT || 5000;


app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use routers for each page
//no routers needed for this project

//first loaded page
app.get("/", (req, res) => {
    res.render('home', {pageTitle: "Ryan Salas Expense Tracker", homeCSS: true});
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}...`);
});
