require("dotenv").config();
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const flash = require("connect-flash");
const passport = require("passport");
const MongoStore = require("connect-mongo");

const { connectDb } = require("./config/dbConnect");
const productRoute = require("./routes/products");
const categoriesRoute = require("./routes/categories");
const usersRoute = require("./routes/users");
const ordersRoute = require("./routes/orders");
const authRoute = require("./routes/auth");

const { User } = require("./models/user");

const { authJwt } = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

const app = express();
const api = process.env.API_URL;
const port = process.env.PORT;
// shopDB
const dbLink = process.env.URI;

connectDb();

// middlewares
app.use(cors()); //used to connect frontend fetching of api to the backed. Should be called first
app.options("*", cors()); //works hand in hand with cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny")); //this logs the endpoints when they're called from frontend
// app.use(authJwt());
app.use(errorHandler);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use(
  session({
    secret: "xxx secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: dbLink,
      useUnifiedTopology: true,
      ttl: 1 * 24 * 60 * 60,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// flash
app.use(flash());

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// ejs routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/blog-details", (req, res) => {
  res.render("blog-details");
});

app.get("/check-out", (req, res) => {
  res.render("check-out");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/faq", (req, res) => {
  res.render("faq");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/product", (req, res) => {
  res.render("product");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const { email, password, password2 } = req.body;
  let errors = [];
  if (!email || !password || !password2) {
    errors.push({ msg: "Please enter all fields" });
    console.log(errors);
  }
  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }
  console.log(password);
  if (password.length < 8) {
    errors.push({ msg: "Password must be at least 8 characters" });
  }
  if (errors.length > 0) {
    res.render("register", {
      errors,
      email,
      password,
      password2,
    });
  } else {
    req.body.username = email;
    User.findOne({ email }).then((user) => {
      if (user) {
        errors.push({
          msg: "An account with this email already exists. Please login",
        });
        return res.render("login", { errors });
      } else {
        req.body.verification_code = verification_code();
        User.register(new User(req.body), password)
          .then((new_user) => {
            // welcome_mail(new_user);
            req.flash("success_msg", "Account created, Please login");
            return res.redirect("/login");
          })
          .catch((err) => {
            errors.push({ msg: "Something went wrong" });
          });
      }
    });
  }
});

app.get("/shop", (req, res) => {
  res.render("shop");
});

app.get("/shopping-cart", (req, res) => {
  res.render("shopping-cart");
});

//routes
app.use(`${api}/products`, productRoute);
app.use(`${api}/categories`, categoriesRoute);
app.use(`${api}/users`, usersRoute);
app.use(`${api}/auth`, authRoute);
app.use(`${api}/orders`, ordersRoute);

app.listen(port, () => {
  console.log("Server listening on PORT ", port);
});
