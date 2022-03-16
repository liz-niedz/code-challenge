const router = require("express").Router();
const controller = require("./items.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

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

module.exports = router;
