import multer from "multer";
import uploadConfig from "./configs/upload";
import { Router } from "express";
import { CreateRoomController } from "./controllers/CreateRoomController";
import { GetRoomsController } from "./controllers/GetRoomsController";
import { GetRoomController } from "./controllers/GetRoomController";

const router = Router();
const upload = multer(uploadConfig);

router.get("/rooms", new GetRoomsController().handle);
router.get("/rooms/:id", new GetRoomController().handle);
router.post("/room", upload.array("images"), new CreateRoomController().handle);

export { router };
