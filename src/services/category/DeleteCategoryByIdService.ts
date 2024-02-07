import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: number;
}

class DeleteCategoryByIdService {
  async execute({ category_id }: CategoryRequest) {

    const associatedManhwas = await prismaClient.categoryManhwa.findMany({
      where: { category_id: Number(category_id) },
    });

    if (associatedManhwas.length > 0) {
      return 'Existem manhwas associados a esta categoria. Não é possível excluí-la.';
    }

    return prismaClient.category.delete({
      where: {
        id: category_id
      }
    })

  }
}

export { DeleteCategoryByIdService }
