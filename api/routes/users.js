import express from "express";

import { createError } from "../utils/error.js";

const router = express.Router();
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("hello user");
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your's account");
// });
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all account");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;
