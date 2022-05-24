// const router = require("express").Router();
// const controller = require("./items.controller");
// const methodNotAllowed = require("../errors/methodNotAllowed");
import {Router} from 'express';
import controller from './items.controller';
import methodNotAllowed from '../errors/methodNotAllowed';

const router = new Router();
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route("/:item_id")
  .get(controller.read)
  .delete(controller.delete)
  .put(controller.update)
  .all(methodNotAllowed);

router.route("/:item_id/edit")
  .put(controller.update)

export default router;
