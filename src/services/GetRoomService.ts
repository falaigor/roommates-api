import prismaClient from "../prisma";

class GetRoomService {
  async execute(id: string) {
    const rooms = await prismaClient.room.findUnique({
      where: {
        id: id,
      },
      include: {
        images: true,
      },
    });

    return rooms;
  }
}

export { GetRoomService };
