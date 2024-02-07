import prismaClient from "../../prisma";

class GetAllManhwasService {
  async execute() {

    return prismaClient.manhwa.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        total_chapter: true
      }
    });
  }
}

export { GetAllManhwasService }
