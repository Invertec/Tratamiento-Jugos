import { Router } from "express";
import { getList, createNewLog, getHtml } from "../controllers/list.controller";

const router = Router()


router.get('/', getHtml)
router.get('/list',getList )
router.post('/list',createNewLog )

export default router