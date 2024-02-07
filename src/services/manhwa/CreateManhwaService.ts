import prismaClient from "../../prisma";

interface ManhwaRequest {
  name: string,
  description: string,
  image?: string,
  total_chapter: number,
}

class CreateManhwaService {
  async execute({ name, description, image, total_chapter }: ManhwaRequest) {

    return prismaClient.manhwa.create({
      data: {
        name: name,
        description: description,
        image: image,
        total_chapter: Number(total_chapter)
      },
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

export { CreateManhwaService }
