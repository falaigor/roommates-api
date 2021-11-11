import prismaClient from "../prisma";

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

    return room;
  }
}

export { CreateRoomService };
