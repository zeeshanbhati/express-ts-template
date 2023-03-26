import dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import * as admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";
import { someClient } from "./someClient";

dotenv.config();

const app = express();
export const firebaseApp = admin.initializeApp({
  credential: applicationDefault(),
});
const port = process.env.PORT;

app.get("/firebase-token", async (req: Request, res: Response) => {
  const uid = "l5BDeL5Sp4NFlbeQ3GSEByOOGd73";

  const response = await someClient.f(uid);
  res.send(response);

  // firebaseApp
  //   .auth()
  //   .createCustomToken(uid)
  //   .then((customToken) => {
  //     res.send(customToken);
  //   })
  //   .catch((error) => {
  //     console.log("Error creating custom token:", error);
  //   });
});

app.get("/:store/hit", (req, res, next) => {
  const { store } = req.params;
  const response = someClient.method(store);
  res.status(200).send(response);
});
app.listen(8000, () => {
  console.log(`[server]: Server is running at http://localhost:8000`);
});

app.get("/get-something", (req, res, next) => {
  res.status(200).json({ message: "This is demo bhai ka api" });
});
