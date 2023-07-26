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

// importing models
const { User } = require("./models/user");
const funct = require("./config/funct");
const mail = require("./config/mail");

// importing functions
let verification_code = funct.verification_code,
  reset_code = funct.reset_code;

// Importing mails
let reset_mail = mail.reset_mail;

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
//app.use(morgan("tiny")); //this logs the endpoints when they're called from frontend
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

// Auth Setup
const localStrategy = require("passport-local").Strategy;

// passport config
passport.use(
  new localStrategy(
    { usernameField: "email", passReqToCallback: true },
    (req, email, password, done) => {
      // Match user
      User.findOne({
        email: email,
      })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: "Invalid Credentials, Try Again",
            });
          }
          if (user.password != password) {
            return done(null, false, { message: "Incorrect Password" });
          }
          return done(null, user);
        })
        .catch((err) => {
          return res.redirect("/");
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// domain reference
var domain = (req) => {
  return "https://" + req.get("host");
};

// =================land ROUTES===============

app.get("/", async (req, res) => {
  let userId = req.user;
  let currentUser;

  await User.findById(userId).then(async (user) => {
    if (user) {
      // console.log("user ", user);
      currentUser = user;
    }
  });
  // console.log("currentUser", currentUser.first_name);
  res.render("land/index", { currentUser: currentUser.first_name });
});

app.get("/women", async (req, res) => {
  let userId = req.user;
  let currentUser;

  await User.findById(userId).then(async (user) => {
    if (user) {
      // console.log("user ", user);
      currentUser = user;
    }
  });
  // console.log("currentUser", currentUser.first_name);
  res.render("land/women", { currentUser: currentUser.first_name });
});

app.get("/men", async (req, res) => {
  let userId = req.user;
  let currentUser;

  await User.findById(userId).then(async (user) => {
    if (user) {
      // console.log("user ", user);
      currentUser = user;
    }
  });
  // console.log("currentUser", currentUser.first_name);
  res.render("land/men", { currentUser: currentUser.first_name });
});

app.get("/brand-fashion", async (req, res) => {
  let userId = req.user;
  let currentUser;

  await User.findById(userId).then(async (user) => {
    if (user) {
      // console.log("user ", user);
      currentUser = user;
    }
  });
  // console.log("currentUser", currentUser.first_name);
  res.render("land/brand-fashion", { currentUser: currentUser.first_name });
});

app.get("/brand-outdoor", async (req, res) => {
  let userId = req.user;
  let currentUser;

  await User.findById(userId).then(async (user) => {
    if (user) {
      // console.log("user ", user);
      currentUser = user;
    }
  });
  // console.log("currentUser", currentUser.first_name);
  res.render("land/brand-outdoor", { currentUser: currentUser.first_name });
});

app.get("/kids", async (req, res) => {
  let userId = req.user;
  let currentUser;

  await User.findById(userId).then(async (user) => {
    if (user) {
      // console.log("user ", user);
      currentUser = user;
    }
  });
  // console.log("currentUser", currentUser.first_name);
  res.render("land/kids", { currentUser: currentUser.first_name });
});

app.get("/luxury", async (req, res) => {
  let userId = req.user;
  let currentUser;

  await User.findById(userId).then(async (user) => {
    if (user) {
      // console.log("user ", user);
      currentUser = user;
    }
  });
  // console.log("currentUser", currentUser.first_name);
  res.render("land/luxury", { currentUser: currentUser.first_name });
});

app.get("/shoes", async (req, res) => {
  let userId = req.user;
  let currentUser;

  await User.findById(userId).then(async (user) => {
    if (user) {
      // console.log("user ", user);
      currentUser = user;
    }
  });
  // console.log("currentUser", currentUser.first_name);
  res.render("land/shoes", { currentUser: currentUser.first_name });
});

app.get("/underwear", async (req, res) => {
  let userId = req.user;
  let currentUser;

  await User.findById(userId).then(async (user) => {
    if (user) {
      // console.log("user ", user);
      currentUser = user;
    }
  });
  // console.log("currentUser", currentUser.first_name);
  res.render("land/underwear", { currentUser: currentUser.first_name });
});

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/blog", (req, res) => {
  res.render("land/blog");
});

app.get("/blog-details", (req, res) => {
  res.render("land/blog-details");
});

app.get("/check-out", (req, res) => {
  res.render("land/check-out");
});

app.get("/contact", (req, res) => {
  res.render("land/contact");
});

app.get("/faq", (req, res) => {
  res.render("land/faq");
});

app.get("/product", (req, res) => {
  res.render("land/product");
});

// ------------- auth Route -----------------

app.get("/login", async (req, res) => {
  let userId = req.user;
  let currentUser;
  await User.findById(userId).then(async (user) => {
    if (user) {
      currentUser = await user.username;
    }
  });
  res.render("auth/login", { currentUser });
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
        // res.redirect("/" + user._id);
        res.redirect("/");
      })
      .catch((err) => {
        req.flash(
          "error_msg",
          "Invalid Credentials! If error persists, contact support."
        );
        return res.redirect("back");
      });
  }
);

app.get("/register", async (req, res) => {
  let userId = req.user;
  let currentUser;
  await User.findById(userId).then(async (user) => {
    if (user) {
      currentUser = await user.username;
    }
  });
  res.render("auth/register", { currentUser });
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
    User.findOne({ email }).then(async (user) => {
      if (user) {
        errors.push({
          msg: "An account with this email already exists. Please login",
        });
        return res.render("auth/login", { errors });
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

        // try { -----
        //   req.body.verification_code = verification_code();
        //   console.log(req.body);
        //   const newUser = new User({
        //     email: req.body.email,
        //     username: req.body.username,
        //     passwordHash: req.body.password,
        //   });
        //   await newUser.save();
        //   req.flash("success_msg", "Account created, Please login");
        //   return res.redirect("/login");
        // } catch (error) {
        //   errors.push({ msg: "Something went wrong" });
        // }
      }
    });
  }
});

app.post("/register/:id", (req, res) => {
  const { first_name, last_name, country, email, password, password2 } =
    req.body;
  let errors = [];
  if (!first_name || !last_name || !email || !password || !password2) {
    errors.push({ msg: "Please enter all fields" });
  }
  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }
  if (password.length < 8) {
    errors.push({ msg: "Password must be at least 8 characters" });
  }
  if (errors.length > 0) {
    res.render("auth/ref_register", {
      errors,
      first_name,
      last_name,
      email,
      password,
      password2,
    });
  } else {
    req.body.username = email;
    User.findOne({ email })
      .then((user) => {
        if (user) {
          errors.push({
            msg: "An account with this email already exists. Please login",
          });
          return res.render("auth/login", { errors });
        } else {
          req.body.verification_code = verification_code();
          User.findById(req.params.id)
            .populate("downline")
            .then((upline) => {
              req.body.sponsor = upline._id;
              req.body.sponsor_name =
                upline.first_name + " " + upline.last_name;
              User.register(new User(req.body), password)
                .then((new_user) => {
                  var dl = {
                    name: new_user.first_name + " " + new_user.last_name,
                    user_id: new_user._id,
                    email: new_user.email,
                  };
                  Downline.create(dl).then((downline) => {
                    upline.downline.push(downline);
                    upline.save();
                    // welcome_mail(new_user);
                    req.flash("success_msg", "Account created, Please login");
                    return res.redirect("/login");
                  });
                })
                .catch((err) => {
                  errors.push({ msg: "Something went wrong" });
                  console.log("Can't create user");
                  return res.render("auth/register", {
                    errors,
                    first_name,
                    last_name,
                    email,
                    password,
                    password2,
                  });
                });
            })
            .catch((err) => {
              errors.push({ msg: "Invalid Referrer" });
              console.log("Invalid Referrer");
              return res.render("auth/register", {
                errors,
                first_name,
                last_name,
                email,
                password,
                password2,
              });
            });
        }
      })
      .catch((err) => {
        errors.push({ msg: "Something went wrong, please try again" });
        return res.render("auth/register", {
          errors,
          first_name,
          last_name,
          email,
          password,
          password2,
        });
      });
  }
});

app.get("/reset", async (req, res) => {
  let userId = req.user;
  let currentUser;
  await User.findById(userId).then(async (user) => {
    if (user) {
      currentUser = await user.username;
    }
  });
  res.render("auth/reset", { page: "Reset", currentUser });
});

app.post("/reset", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        var dom = domain(req);
        user.reset_password.code = reset_code();
        user.reset_password.status = true;
        // reset_mail(user, dom);
        user.save();
        // console.log(user.reset_password.code);
        req.flash("success_msg", "Check your mail for the reset code");
        res.redirect("/reset/" + user._id);
      } else {
        req.flash("error_msg", "Account does not exist!");
        res.redirect("back");
      }
    })
    .catch((err) => {
      console.log("err", err);
      req.flash("error_msg", "Account does not exist!");
      res.redirect("back");
    });
});

app.get("/reset/:id", async (req, res) => {
  let user = req.params.id;
  let userId = req.user;
  let currentUser;
  await User.findById(userId).then(async (user) => {
    if (user) {
      currentUser = await user.username;
    }
  });
  res.render("auth/new_password", { user, page: "New Password", currentUser });
});

// ===============shop ROUTES===================

app.get("/shop", (req, res) => {
  res.render("land/shop");
});

app.get("/shopping-cart", (req, res) => {
  res.render("land/shopping-cart");
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
