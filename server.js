const path = require("path");
const express = require("express");
<<<<<<< HEAD
const exphbs = require("express-handlebars");

const routes = require("./controllers");
//const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

=======
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

>>>>>>> abae9eff73457b2a5d70ab0b353aeea0e65ddeb8
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

<<<<<<< HEAD
=======
const sess = {
  secret: "cookies yummy",
  cookie: {
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

>>>>>>> abae9eff73457b2a5d70ab0b353aeea0e65ddeb8
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

<<<<<<< HEAD
//sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
//});
=======
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
>>>>>>> abae9eff73457b2a5d70ab0b353aeea0e65ddeb8
