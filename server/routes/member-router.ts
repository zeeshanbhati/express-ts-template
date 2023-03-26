import express from "express";
import { listMembers } from "../services/member-service";

const memberRouter = express.Router();

memberRouter.get("/list-members", async (req, res, next) => {
  var members = await listMembers();
  res.status(200).send(members);
});

export default memberRouter;
