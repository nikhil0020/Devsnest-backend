const router = require("express").Router();
const {stripe_secret} = require("../config/index")
const stripe = require("stripe")(stripe_secret);
const path = require("path");

router.get('/', function (req, res) {
    console.log(stripe_secret);
    res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  console.log(req.body);
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: req.body.price * 100,
          name: "Shopping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      // mode: "payment",
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}?canceled=true`,
    });
    // console.log(session);
    res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

module.exports = router;