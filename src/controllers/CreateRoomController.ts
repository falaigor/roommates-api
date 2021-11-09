import { Request, Response } from "express";
import { CreateRoomService } from "../services/CreateRoomService";

interface ICreateRoomRequest {
  title: string;
  description: string;
  price: string;
  latitude: string;
  longitude: string;
}

class CreateRoomController {
  async handle(request: Request, response: Response) {
    const {
      title,
      description,
      price,
      latitude,
      longitude,
    }: ICreateRoomRequest = request.body;
    const { user_id } = request;

    const requestImages = request.files as Express.Multer.File[];
    console.log(requestImages);

    const images = requestImages.map((image) => {
      return { path: image.path };
    });

    const service = new CreateRoomService();

    try {
      const result = await service.execute(
        title,
        description,
        price,
        latitude,
        longitude,
        user_id,
        images
      );
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { CreateRoomController };
