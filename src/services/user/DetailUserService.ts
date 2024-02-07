import prismaClient from "../../prisma";

class DetailUserService {
  async execute(user_id: number) {
    return prismaClient.user.findFirst({
      where: {
        id: user_id
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });
  }
}

export { DetailUserService }