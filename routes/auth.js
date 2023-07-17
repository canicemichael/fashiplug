const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const passport = require("passport");
// Auth Setup
const localStrategy = require("passport-local").Strategy;

// passport config
// passport.use(
//   new localStrategy(
//     { usernameField: "email", passReqToCallback: true },
//     (req, email, password, done) => {
//       // Match user
//       User.findOne({
//         email: email,
//       })
//         .then((user) => {
//           if (!user) {
//             return done(null, false, {
//               message: "Invalid Credentials, Try Again",
//             });
//           }
//           if (user.password != password) {
//             return done(null, false, { message: "Incorrect Password" });
//           }
//           return done(null, user);
//         })
//         .catch((err) => {
//           return res.redirect("/");
//         });
//     }
//   )
// );

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });





router.post("/register/:id", (req, res) => {
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

router.get("/reset", (req, res) => {
  res.render("auth/reset", { page: "Reset" });
});

module.exports = router;
