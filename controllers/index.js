const {
  getMcdonaldsDishes,
  getMcdonaldsDishById,
  addMcdonaldsDish,
  updateMcdonaldsDish,
  updateStatusMcdonaldsDish,
  removeMcdonaldsDish,
} = require("./mcdonalds/index");

const {
  getKfcDishes,
  getKfcDishById,
  addKfcDish,
  updateKfcDish,
  updateStatusKfcDish,
  removeKfcDish,
} = require("./kfc/index");

module.exports = {
  getMcdonaldsDishes,
  getMcdonaldsDishById,
  addMcdonaldsDish,
  updateMcdonaldsDish,
  updateStatusMcdonaldsDish,
  removeMcdonaldsDish,
  getKfcDishes,
  getKfcDishById,
  addKfcDish,
  updateKfcDish,
  updateStatusKfcDish,
  removeKfcDish,
};
