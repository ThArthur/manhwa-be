import prismaClient from "../../prisma";

interface NewManhwaList {
  user_id: number
}

class GetUserManhwaListService {
  async execute({user_id}: NewManhwaList) {

    const manhwas = await prismaClient.user.findUnique({
      where: { id: user_id },
      include: {
        manhwaList: {
          include: { manhwa: true },
        },
      },
    });



    return manhwas.manhwaList.map((item) => ({
      actual_chapter: item.actual_chapter,
      manhwa: {
        id: item.manhwa.id,
        name: item.manhwa.name,
        description: item.manhwa.description,
        image: item.manhwa.image,
        total_chapter: item.manhwa.total_chapter,
        created_at: item.manhwa.created_at,
        updated_at: item.manhwa.updated_at,
      },
    }));
  }
}

export { GetUserManhwaListService }
