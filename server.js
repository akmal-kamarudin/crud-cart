const express = require("express");
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Connected with React!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// http://localhost:3000/Login , /Logout , /profile

/* /////////////// NEW PAGE ///////////////// */

// const express = require("express");
// const path = require("path");
// const { auth, requiresAuth } = require("express-openid-connect");
// const app = express();

// const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// require("dotenv").config();
// const PORT = process.env.PROD_PORT || 5000;

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
//   baseURL: process.env.BASE_URL,
//   clientID: process.env.AUTH0_CLIENT_ID,
//   secret: process.env.SESION_SECRET,
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(
//   cors({
//     origin: "http://localhost:5173", // restrict calls to those this address
//     // methods: "GET" // only allow GET requests
//   })
// );
// app.use(auth(config));
// app.use(express.json());

// // app.use(function (req, res, next) {
// //   res.header("Access-Control-Allow-Origin", "*");
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept"
// //   );
// //   next();
// // });

// app.get("/message", (req, res) => {
//   res.json({ message: "Connected with React!" });
// });

// // req.isAuthenticated is provided from the auth router
// app.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });

// // The /profile route will show the user profile as JSON
// app.get("/profile", requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user, null, 2));
// });

// app.listen(PORT, function () {
//   console.log(`Listening on http://localhost:${PORT}`);
// });

// // http://localhost:3000/Login , /Logout , /profile
