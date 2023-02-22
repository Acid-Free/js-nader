const express = require("express");
const session = require("express-session");
const redis = require("redis");
const redisStore = require("connect-redis")(session);

const app = express();
const redisClient = redis.createClient();

app.use(
  session({
    secret: "mysecretkey", // set your own secret key
    store: new redisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.setHeader("Content-Type", "text/html");
    res.write("<p>views: " + req.session.views + "</p>");
    res.write("<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>");
    res.end();
  } else {
    req.session.views = 1;
    res.end("Welcome to the session demo. Refresh page!");
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
