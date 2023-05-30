const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/salateiraDish");

router.get("/", ctrl.getSalateiraDishes);

router.get("/:dishId", isValidId, ctrl.getSalateiraDishById);

router.post("/", validateBody(schemas.schema), ctrl.addSalateiraDish);

router.put(
  "/:dishId",
  isValidId,
  validateBody(schemas.schema),
  ctrl.updateSalateiraDish
);

router.patch(
  "/:dishId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusSalateiraDish
);

router.delete("/:dishId", isValidId, ctrl.removeSalateiraDish);

module.exports = router;
