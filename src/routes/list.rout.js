import { Router } from "express";
import { getList, createNewLog} from "../controllers/list.controller";

const router = Router()

router.get('/list',getList )
router.post('/list',createNewLog )

export default router