import dotenv from "dotenv";
import express from "express";
import memberRouter from "./routes/member-router";

dotenv.config();
const app = express();

//demo-endpoint
app.get("/hello", (req, res, next) => {
  res.status(200).json({ message: "Hello World!" });
});

// Routers for specific endpoints
app.use(memberRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `[server]: Server is running at http://localhost:${process.env.PORT}`
  );
});
