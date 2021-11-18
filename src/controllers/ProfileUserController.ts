import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
  async handle(request: Request, response: Response) {
    const { session_id } = request;

    const service = new ProfileUserService();
    const result = await service.execute(session_id);

    return response.json(result);
  }
}

export { ProfileUserController };
