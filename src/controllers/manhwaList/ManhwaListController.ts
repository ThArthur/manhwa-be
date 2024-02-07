import {Request, Response} from "express";
import {AddManhwaToUserService} from "../../services/manhwaList/AddManhwaToUserService";
import {GetUserManhwaListService} from "../../services/manhwaList/GetUserManhwaListService";


class ManhwaListController {
  async AddManhwaToUser (req: Request , res: Response) {
    const { manhwas_id  } = req.body;
    const user_id = Number(req.params.user_id);

    const addManhwaToUserService = new AddManhwaToUserService();

    const list = await addManhwaToUserService.execute({ manhwas_id, user_id });

    return res.json(list);
  }

  async GetUserManhwaList(req: Request , res: Response) {
    const user_id = Number(req.params.user_id);

    const getUserManhwaListService = new GetUserManhwaListService();

    const list = await getUserManhwaListService.execute({ user_id });

    return res.json(list);
  }

}

export default new ManhwaListController();
