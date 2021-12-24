import express from "express";
import { getNotifs, getNotifID, saveNotif, updateNotif,deleteNotif }   from "../controllers/notificationController.js";
const router = express.Router();

router.get('/', getNotifs);

router.post('/', saveNotif);

router.get('/:id',getNotifID);

router.patch('/:id', updateNotif);

router.delete('/:id', deleteNotif);

export default router;