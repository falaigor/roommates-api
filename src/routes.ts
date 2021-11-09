import multer from "multer";
import uploadConfig from "./configs/upload";
import { Router } from "express";
import { ensureAuthenticaed } from "./middleware/ensureAuthenticaed";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateRoomController } from "./controllers/CreateRoomController";
import { GetRoomsController } from "./controllers/GetRoomsController";

const router = Router();
const upload = multer(uploadConfig);

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/room",
  ensureAuthenticaed,
  upload.array("images"),
  new CreateRoomController().handle
);

router.get("/room", new GetRoomsController().handle);

export { router };
