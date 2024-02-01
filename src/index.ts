import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send(
    `This is an <a href="${process.env.EXPRESS}">Express</a> + <a href="${process.env.TYPESCRIPT}">TypeScript</a> server`
  );
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://${host}:${port}`);
});
