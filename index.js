require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { connectDb } = require("./config/dbConnect");
const productRoute = require("./routes/products");
const categoriesRoute = require("./routes/categories");
const usersRoute = require("./routes/users");
const ordersRoute = require("./routes/orders");
const { authJwt } = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

const app = express();
const api = process.env.API_URL;
const port = process.env.PORT;

connectDb();

// middlewares
app.use(cors()); //used to connect frontend fetching of api to the backed. Should be called first
app.options("*", cors()); //works hand in hand with cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny")); //this logs the endpoints when they're called from frontend
// app.use(authJwt());
app.use(errorHandler);

app.use(express.static("views"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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
app.use(`${api}/orders`, ordersRoute);

app.listen(port, () => {
  console.log("Server listening on PORT ", port);
});
