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
  console.log(
    "Hello from a public endpoint! You don't need to be authenticated to see this."
  );
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

// curl --request GET \
//   --url http://localhost:8080/api/private \
//   --header 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImR6ejZTTE1CSHNZQml3ZTROU05vayJ9.eyJpc3MiOiJodHRwczovL2FrbWFsLWJ1c3kudXMuYXV0aDAuY29tLyIsInN1YiI6IlcyNkhXVG4wZEk5bHdJQ2Zwbk9CclppVHM2UTVZVlFMQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3d3dy5jYXJ0LWFwaS5jb20iLCJpYXQiOjE2OTA3ODQyOTgsImV4cCI6MTY5MDg3MDY5OCwiYXpwIjoiVzI2SFdUbjBkSTlsd0lDZnBuT0JyWmlUczZRNVlWUUwiLCJzY29wZSI6InJlYWQ6Y2FydCB3cml0ZTpjYXJ0IHVwZGF0ZTpjYXJ0IGRlbGV0ZTpjYXJ0IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOlsicmVhZDpjYXJ0Iiwid3JpdGU6Y2FydCIsInVwZGF0ZTpjYXJ0IiwiZGVsZXRlOmNhcnQiXX0.fTyDqJo85CgzcCsZ2OIDNC5Cz4Xu_VPBnjssPWrqN6sAuNjTQGIMIZAu8JXReMh5P4iS7XDRFqRUl5MOPOIKxAfBo1GqB0r1K6cegiAEDw45aFTS5PIGt7a_VQ_q4tQJiTy-EAKykr3_Haha8sLzg9OD6BapmkzIYOjJZsrO_zvoA_aNE8KeZg6FxLqmdd1sMeSFMI46Ie2pCKXWdxapOfso4AtjrxPhKMYo7g0pzTfy1jL4ghKQ-AmwZlHgWqg7MmSCJBlvy6bf7Y2mOYiUC_aKZqQBDtd2J6wE_Uu9LsH8BSxM1pnSH_kJwuKgrgWmoAbiiNhkKSbrTbiGaqjfCQ'

// Create an API endpoint for token retrieval
// app.get("/api/token", async (req, res) => {
//   const options = {
//     method: "POST",
//     url: "https://akmal-busy.us.auth0.com/oauth/token",
//     headers: { "content-type": "application/json" },
//     data: qs.stringify({
//       client_id: "W26HWTn0dI9lwICfpnOBrZiTs6Q5YVQL",
//       client_secret:
//         "kyjKSZtMWsLq68VGZelELZuMNdl2Ax7vMK60qmRpKy7ECwTmbaq8DPnvPniqn4hO",
//       audience: "https://www.cart-api.com",
//       grant_type: "client_credentials",
//     }),
//   };

//   try {
//     const response = await axios.request(options);
//     res.json(response.data); // Return the access token as a JSON response
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to retrieve access token" });
//   }
// });

app.get("/api/token", async (req, res) => {
  const data = {
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    audience: "https://www.cart-api.com",
    grant_type: "client_credentials",
  };

  try {
    const response = await fetch(
      "https://akmal-busy.us.auth0.com/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    const accessToken = responseData.access_token;
    // console.log(accessToken);

    res.json({ accessToken }); // Return the access token as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve access token" });
  }
});
