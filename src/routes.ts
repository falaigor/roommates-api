import multer from "multer";
import uploadConfig from "./configs/upload";
import { Router } from "express";
import { CreateRoomController } from "./controllers/CreateRoomController";
import { GetRoomsController } from "./controllers/GetRoomsController";
import { GetRoomController } from "./controllers/GetRoomController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();
const upload = multer(uploadConfig);

router.post("/authenticate", new AuthenticateUserController().handle);

router.get("/rooms", new GetRoomsController().handle);
router.get("/rooms/:id", new GetRoomController().handle);
router.post("/room", upload.array("images"), new CreateRoomController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };
