// const { auth } = require("express-openid-connect");

const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");
const app = express();
const cors = require("cors");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  // secret: "e206b769598200650da69a3944b4da2e23ed7420c8d7c906df1f3c7849c1081f", //random secret
  baseURL: "http://localhost:3000",
  clientID: "xVp4Pr9GKQtolrOj3qkqM8Sg0m0TrTFj",
  issuerBaseURL: "https://akmal-busy.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(cors());
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// The /profile route will show the user profile as JSON
app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.listen(3000, function () {
  console.log("Listening on http://localhost:3000");
});

// http://localhost:3000/Login , /Logout , /profile
