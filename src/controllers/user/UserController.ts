import {Request, Response} from "express";

import {AuthUserService} from "../../services/user/AuthUserService";
import {CreateUserService} from "../../services/user/CreateUserService";
import {DetailUserService} from "../../services/user/DetailUserService";

class UserController {
  async authUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const createUserService = new AuthUserService();

    const user = await createUserService.execute({ email, password})

    return res.json(user);
  }

  async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password})

    return res.json(user);
  }

  async detailUser(req: Request, res: Response) {
    const detailUserService = new DetailUserService();

    const user_id = req.user_id;

    const user = await detailUserService.execute(user_id);

    return res.json(user);
  }

}

export default new UserController();
