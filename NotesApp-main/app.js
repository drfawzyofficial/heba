const express = require('express');
const app = express();
const session = require('express-session');
const PORT = 3000 || process.env.PORT

require('./connection/mongoose')
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: "my secret key",
  saveUninitialized: true,
  resave: false
})
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

//set template engine
app.set('view engine', 'ejs');

const routes = require("./routes/note");

//routs prefect
app.use("/note", routes);
const Note = require('./models/Note');

app.get("/", async(req, res) => {
  const notes = await Note.find({});
  res.render('index', { notes: notes });
});

app.listen(PORT, () => {
  console.log(`server started at port : ${PORT}`);
})