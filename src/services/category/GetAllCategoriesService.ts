import prismaClient from "../../prisma";

class GetAllCategoriesService {
  async execute() {

    return prismaClient.category.findMany({
      select: {
        id: true,
        name: true
      }
    });
  }
}

export { GetAllCategoriesService }
