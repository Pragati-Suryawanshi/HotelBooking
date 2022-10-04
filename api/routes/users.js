import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/vaerifyToken.js";

const router = express.Router();

router.get('/checkauthentication',verifyToken,(req,res,next)=>
{
    res.send("Hello user You are Loged in")
})

//update
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getUsers);
export default router;
