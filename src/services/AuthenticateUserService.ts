import axios from "axios";
import prismaClient from "../prisma";
import { sign } from "jsonwebtoken";
interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  id: string;
  name: string;
  email: string;
  picture: string;
}

class AuthenticateUserService {
  async execute(accessToken: string) {
    const response = await axios.get<IUserResponse>(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const { email, id, picture, name } = response.data;

    let user = await prismaClient.user.findFirst({
      where: {
        user_id: id,
      },
    });

    if (!user) {
      await prismaClient.user.create({
        data: {
          user_id: id,
          email,
          avatar_url: picture,
          name,
        },
      });
    }

    const token = sign(
      {
        user: {
          id: user.id,
          name: user.name,
          avatar: user.avatar_url,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return { token, user };
  }
}

export { AuthenticateUserService };
