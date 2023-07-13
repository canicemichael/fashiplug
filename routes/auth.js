const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const flash = require('connect-flash');
const passport = require('passport');


router.use(passport.initialize());
router.use(passport.session());

// flash
router.use(flash());

router.use(function (req, res, next) {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
})


router.post("/", async (req, res) => {
  const oldUser = await User.findOne({ email: req.body.email });
  if (oldUser) {
    return res.status(400).json({ message: "User is already registered" });
  }

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: await bcrypt.hash(req.body.password, 10),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    street: req.body.street,
    apartment: req.body.apartment,
    zip: req.body.zip,
    city: req.body.city,
    country: req.body.country,
  });

  user = await user.save();

  if (!user) return res.status(400).send("the user cannot be created");

  res.send(user);
});


router.post("/register", async (req, res) => {
  const oldUser = await User.findOne({ email: req.body.email });
  if (oldUser) {
    return res.status(400).json({ message: "User is already registered" });
  }

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: await bcrypt.hash(req.body.password, 10),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    street: req.body.street,
    apartment: req.body.apartment,
    zip: req.body.zip,
    city: req.body.city,
    country: req.body.country,
  });

  user = await user.save();

  if (!user) return res.status(400).send("the user cannot be created");

  res.send(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send("The user not found");
  }

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      "secret",
      {
        expiresIn: "1d",
      }
    );
    res.status(200).send({ user: user.email, token: token });
  } else {
    res.status(400).send("Invalid email or password");
  }
});





module.exports = router;
