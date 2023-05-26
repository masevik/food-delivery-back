const { getKfcDishes } = require("./getKfcDishes");
const { getKfcDishById } = require("./getKfcDishById");
const { addKfcDish } = require("./addKfcDish");
const { updateKfcDish } = require("./updateKfcDish");
const { updateStatusKfcDish } = require("./updateStatusKfcDish");
const { removeKfcDish } = require("./removeKfcDish");

module.exports = {
  getKfcDishes,
  getKfcDishById,
  addKfcDish,
  updateKfcDish,
  updateStatusKfcDish,
  removeKfcDish,
};
