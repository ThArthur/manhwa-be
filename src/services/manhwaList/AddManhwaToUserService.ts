import prismaClient from "../../prisma";

interface NewManhwaList {
  manhwas_id: number[],
  user_id: number
}

class AddManhwaToUserService {
  async execute({manhwas_id, user_id}: NewManhwaList) {

    const manhwaList = manhwas_id.map((manhwaId: number) => ({
      user_id : user_id,
      manhwa_id: manhwaId,
    }));

    return prismaClient.listManhwa.createMany({
      data: manhwaList,
    });
  }
}

export { AddManhwaToUserService }
