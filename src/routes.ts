import { Router } from 'express'
import multer from 'multer';

import uploadConfig from './config/multer'

import { isAuthenticated } from './middlewares/isAuthenticated';

import CategoryController from "./controllers/category/CategoryController";
import ManhwaController from "./controllers/manhwa/ManhwaController";
import ManhwaListController from "./controllers/manhwaList/ManhwaListController";
import manhwaListController from "./controllers/manhwaList/ManhwaListController";
import UserController from "./controllers/user/UserController";


const router = Router();

const upload = multer(uploadConfig.upload('./tmp'))

// User Routes
router.post('/user', UserController.createUser)
router.post('/login', UserController.authUser)
router.get('/user-info', isAuthenticated, UserController.detailUser)

// Category Routes
router.post('/category', isAuthenticated, CategoryController.createCategory)
router.delete('/category/:category_id', isAuthenticated, CategoryController.deleteCategory)
router.get('/categories', isAuthenticated, CategoryController.getAllCategories)

// Manhwa Routes
router.post('/manhwa', isAuthenticated, upload.single('file'), ManhwaController.createManhwa)
router.get('/manhwas', isAuthenticated, ManhwaController.getAllManhwas)
router.get('/category/:category_id/manhwas', isAuthenticated, ManhwaController.ListManhwaByCategory)

// Manhwa List Routes
router.post('/user/:user_id/adicionar-manhwa', isAuthenticated, ManhwaListController.AddManhwaToUser)
router.get('/user/:user_id/list', isAuthenticated, manhwaListController.GetUserManhwaList)

export { router };
