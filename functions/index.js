const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Hih5NAUejVeeeGNBXcyALxSWeG0Xt8OLktG0UDqEeCMxhLuI4kIOGxPrUxz9AI459eKwjnwGKIdqml9GSxICgjM00ie1okGri"
);

// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//Api Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);
