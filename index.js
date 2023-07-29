const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { auth } = require("express-oauth2-jwt-bearer");
const guard = require("express-jwt-permissions")();

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: "https://www.cart-api.com",
  issuerBaseURL: "https://akmal-busy.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

// middleware
app.use(cors());
app.use(express.json()); //req.body
// enforce on all endpoints
// app.use(jwtCheck);

// This route doesn't need authentication
app.get("/api/public", function (req, res) {
  res.json({
    message:
      "Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});

// This route needs authentication
app.get("/api/private", jwtCheck, function (req, res) {
  res.json({
    message:
      "Hello from a private endpoint! You need to be authenticated to see this.",
  });
});

app.get("/cart", guard.check(["read:cart"]), function (req, res) {
  res.json({ cart1: "The first cart", cart: "The second cart" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// get all shopItems
app.get("/items", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (error) {
    console.error(err.message);
  }
});

// create a shopItem
app.post("/items", async (req, res) => {
  try {
    console.log(req.body);
    const { name, price, pic, description } = req.body;
    const newItem = await pool.query(
      "INSERT INTO items (name, price, pic, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, price, pic, description]
    );
    res.json(newItem);
  } catch (error) {
    console.error(err.message);
  }
});
