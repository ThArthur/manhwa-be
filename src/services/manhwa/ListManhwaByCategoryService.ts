import prismaClient from "../../prisma";

interface ManhwaRequest {
  category_id: number,
}

class ListManhwaByCategoryService {
  async execute({ category_id }: ManhwaRequest) {

    return prismaClient.category.findUnique({
      where: {
        id: category_id
      },
      include: {
        categoryManhwa: true,
      }
    });
  }
}

export { ListManhwaByCategoryService }
