import prismaClient from "../prisma";
import { io } from "../app";

class CreateRoomService {
  async execute(
    title: string,
    description: string,
    price: string,
    latitude: string,
    longitude: string,
    user_id: string,
    images: { path: string }[]
  ) {
    const room = await prismaClient.room.create({
      data: {
        title,
        description,
        price,
        latitude,
        longitude,
        user_id,
        images: {
          create: images,
        },
      },
      include: {
        images: true,
        user: true,
      },
    });

    const infoWS = {
      title: room.title,
      description: room.description,
      price: room.price,
      latitude: room.latitude,
      longitude: room.longitude,
      images: room.images,
      user_id: room.user_id,
      user: {
        name: room.user.name,
        avatar: room.user.avatar_url,
      },
    };

    io.emit("new_room", infoWS);

    return room;
  }
}

export { CreateRoomService };
