import createHttpError from "http-errors";
import { listMembersFromDb } from "../repository/member-repository";

export const listMembers = async () => {
  try {
    const users = await listMembersFromDb();
    console.log(users);
    return users;
  } catch {
    createHttpError(500, "Error in fetching members");
  }
};
