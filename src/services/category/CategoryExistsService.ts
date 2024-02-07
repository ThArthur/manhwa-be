import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: number;
}

class CategoryExistsService {
  async execute({ category_id }: CategoryRequest) {

    return prismaClient.category.findUnique({
      where: { id: Number(category_id) },
    });
  }
}

export { CategoryExistsService }
