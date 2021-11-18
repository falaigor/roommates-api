import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import "./configs/authGoogle";

import { router } from "./routes";

const app = express();
app.use(cors());
const serverHttp = http.createServer(app);

app.use(express.json());
app.use(router);

app.get("/auth/google", (request, response) => {
  const clientID = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectURI = process.env.GOOGLE_REDIRECT_URI;

  response.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${clientID}&cliente_secrete=${clientSecret}&scope=profile&redirect_uri=${redirectURI}auth/google/callback`
  );
});

app.get("/auth/google/callback", (request, response) => {
  const { code } = request.query;
  console.log(request.params);
  return response.json(code);
});

serverHttp.listen(process.env.PORT || 4000, () =>
  console.log("🚀 Server is runing on PORT 4000")
);
