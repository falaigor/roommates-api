import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateRoomController } from "./controllers/CreateRoomController";
import { ensureAuthenticaed } from "./middleware/ensureAuthenticaed";
import multer from "multer";
import uploadConfig from "./configs/upload";

const router = Router();
const upload = multer(uploadConfig);

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/room",
  ensureAuthenticaed,
  upload.array("images"),
  new CreateRoomController().handle
);

export { router };
