import * as path from 'path';

import dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });

import Knex from "./db/connection";

import express from 'express';
import cors from 'cors';

import handleError from './errors/errorHandler';
import notFound from './errors/notFound';
import itemsRouter from './items/items.router';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/items", itemsRouter);

app.use(notFound);
app.use(handleError);

const port = process.env.PORT || 8080;

app.listen(port, function () {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening on port https://localhost:${port}`);
});

Knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(5001, listener);
  })
  .catch((error) => {
    console.error(error);
    Knex.destroy();
  });

function listener() {
  console.log(`Listening on Port ${5001}!`);
}