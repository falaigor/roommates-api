import prismaClient from "../prisma";

class ProfileUserService {
  async execute(session_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: session_id,
      },
    });

    return user;
  }
}

export { ProfileUserService };
