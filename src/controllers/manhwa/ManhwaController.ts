import {Request, Response} from "express";
import {CreateManhwaService} from "../../services/manhwa/CreateManhwaService";
import {GetAllManhwasService} from "../../services/manhwa/GetAllManhwasService";
import {ListManhwaByCategoryService} from "../../services/manhwa/ListManhwaByCategoryService";


class ManhwaController {
  async createManhwa(req: Request , res: Response) {
    const { name, description, total_chapter  } = req.body;

    if(!req.file) {
      throw new Error('File is required!')
    }

    const { originalname, filename: image } = req.file;

    const createManhwaService = new CreateManhwaService();

    const category = await createManhwaService.execute({ name, description, image, total_chapter });

    return res.json(category);
  }

  async getAllManhwas(req: Request , res: Response) {
    const getAllManhwasService = new GetAllManhwasService();

    const categories = await getAllManhwasService.execute();

    return res.json(categories);
  }

  async ListManhwaByCategory(req: Request , res: Response) {
    const category_id = Number(req.params.category_id);

    const listManhwaByCategoryService = new ListManhwaByCategoryService();

    const category = await listManhwaByCategoryService.execute({ category_id });

    return res.json(category);
  }

}

export default new ManhwaController();
