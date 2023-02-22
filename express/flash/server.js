import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";
const app = express();

const port = 5500;

app.use(cookieParser("secrets"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

app.all("/", (request, response) => {
  request.flash("test", "this is just a test");
  response.redirect("/test");
});

app.all("/test", (request, response) => {
  response.send(JSON.stringify(request.flash("test")));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
