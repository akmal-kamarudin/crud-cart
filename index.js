const express = require("express");
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");
const guard = require("express-jwt-permissions")();

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: "https://www.cart-api.com",
  issuerBaseURL: "https://akmal-busy.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

// enforce on all endpoints
app.use(jwtCheck);

app.get("/cart", guard.check(["read:cart"]), function (req, res) {
  res.json({ cart1: "The first cart", cart: "The second cart" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
