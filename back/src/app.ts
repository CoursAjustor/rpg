import * as bodyParser from "body-parser";
import * as express from "express";
import { Routes } from "./routes/routes";
import { dbInit } from "./utils/Database";

const main = async () => {
  const PORT = process.env.PORT || 3000;

  const app = express();
  await dbInit()

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const routes = new Routes()

  app.use(routes.routes())

  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
}


main()