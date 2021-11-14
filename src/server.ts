import "dotenv/config";
import express from "express";
import session from "express-session";
import http from "http";
import cors from "cors";
import passport from "passport";
import "./auth";

import { router } from "./routes";

const app = express();
app.use(cors());
const serverHttp = http.createServer(app);

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(express.json());
app.use(router);
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/signin/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/protected", isLoggedIn, (request, response) => {
  response.send(`Hello ${request.user}`);
});

app.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

serverHttp.listen(process.env.PORT || 4000, () =>
  console.log("🚀 Server is runing on PORT 4000")
);
