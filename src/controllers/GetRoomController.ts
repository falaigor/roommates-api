import { Request, Response } from "express";
import { GetRoomService } from "../services/GetRoomService";

type GetRoomRequest = {
  room_id: string;
};

class GetRoomController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new GetRoomService();
    const result = await service.execute(id);
    return response.json(result);
  }
}

export { GetRoomController };
