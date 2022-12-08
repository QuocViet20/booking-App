import express from "express";

import { createError } from "../utils/error.js";
const router = express.Router();
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRooms,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE
router.post("/:hotelId", createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getAllRooms);

export default router;
