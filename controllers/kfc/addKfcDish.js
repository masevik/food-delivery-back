const { KfcDish } = require("../../models/kfcDish");
const { ctrlWrapper } = require("../../utils");

const addKfcDish = async (req, res, next) => {
  const result = await KfcDish.create(req.body);
  return res.status(201).json(result);
};

module.exports = {
  addKfcDish: ctrlWrapper(addKfcDish),
};
