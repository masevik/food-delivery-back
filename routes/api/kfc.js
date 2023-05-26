const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/kfcDish");

router.get("/", ctrl.getKfcDishes);

router.get("/:dishId", isValidId, ctrl.getKfcDishById);

router.post("/", validateBody(schemas.schema), ctrl.addKfcDish);

router.put(
  "/:dishId",
  isValidId,
  validateBody(schemas.schema),
  ctrl.updateKfcDish
);

router.patch(
  "/:dishId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusKfcDish
);

router.delete("/:dishId", isValidId, ctrl.removeKfcDish);

module.exports = router;
