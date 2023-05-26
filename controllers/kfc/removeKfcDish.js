const { KfcDish } = require("../../models/kfcDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const removeKfcDish = async (req, res, next) => {
  const { dishId } = req.params;
  const result = await KfcDish.findByIdAndDelete(dishId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json({ message: "Dish deleted" });
};

module.exports = {
  removeKfcDish: ctrlWrapper(removeKfcDish),
};
