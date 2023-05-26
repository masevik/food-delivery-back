const { KfcDish } = require("../../models/kfcDish");
const { ctrlWrapper } = require("../../utils");

const getKfcDishes = async (req, res, next) => {
  const result = await KfcDish.find({}, "-createdAt -updatedAt");
  return res.status(200).json(result);
};

module.exports = {
  getKfcDishes: ctrlWrapper(getKfcDishes),
};
