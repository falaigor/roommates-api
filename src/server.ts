import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import passport from "passport";
import "./configs/authGoogle";

import { router } from "./routes";

const app = express();
app.use(cors());
const serverHttp = http.createServer(app);

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(express.json());
app.use(router);
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/google/success",
    failureRedirect: "/auth/google/failure",
  })
);

app.get("/auth/google/success", isLoggedIn, (request, response) => {
  const accessToken = request.user;
  return response.json(accessToken);
});

app.get("/auth/google/failure", (request, response) => {
  response.send("Failed to authenticate..");
});

serverHttp.listen(process.env.PORT || 4000, () =>
  console.log("🚀 Server is runing on PORT 4000")
);
