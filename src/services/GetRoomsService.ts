import prismaClient from "../prisma";

class GetRoomsService {
  async execute() {
    const rooms = await prismaClient.room.findMany({
      orderBy: {
        title: "desc",
      },
      include: {
        images: true,
      },
    });

    return rooms;
  }
}

export { GetRoomsService };
