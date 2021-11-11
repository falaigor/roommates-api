import prismaClient from "../prisma";
import { io } from "../app";

class CreateRoomService {
  async execute(
    title: string,
    description: string,
    price: string,
    latitude: string,
    longitude: string,
    images: { path: string }[]
  ) {
    const room = await prismaClient.room.create({
      data: {
        title,
        description,
        price,
        latitude,
        longitude,
        images: {
          create: images,
        },
      },
      include: {
        images: true,
      },
    });

    const infoWS = {
      title: room.title,
      description: room.description,
      price: room.price,
      latitude: room.latitude,
      longitude: room.longitude,
      images: room.images,
    };

    io.emit("new_room", infoWS);

    return room;
  }
}

export { CreateRoomService };
