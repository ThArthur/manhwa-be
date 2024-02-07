import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import {GetAllCategoriesService} from "../../services/category/GetAllCategoriesService";
import {DeleteCategoryByIdService} from "../../services/category/DeleteCategoryByIdService";

class CategoryController {
  async createCategory (req: Request , res: Response) {
    const { name } = req.body;

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute({name});

    return res.json(category);
  }

  async getAllCategories (req: Request , res: Response) {
    const { name } = req.body;

    const getAllCategoriesService = new GetAllCategoriesService();

    const categories = await getAllCategoriesService.execute();

    return res.json(categories);
  }

  async deleteCategory (req: Request, res: Response) {
    const category_id = Number(req.params.category_id);

    const deleteCategoryByIdService = new DeleteCategoryByIdService();

    const categoryDeleted = await deleteCategoryByIdService.execute({category_id});

    return res.json(categoryDeleted);
  }
}

export default new CategoryController();
