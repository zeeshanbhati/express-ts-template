import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.get("/hello", (req, res, next) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(process.env.PORT, () => {
  console.log(
    `[server]: Server is running at http://localhost:${process.env.PORT}`
  );
});
