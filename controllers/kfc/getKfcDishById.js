const { KfcDish } = require("../../models/kfcDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const getKfcDishById = async (req, res, next) => {
  const { dishId } = req.params;
  const result = await KfcDish.findById(dishId, "-createdAt -updatedAt");
  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json(result);
};

module.exports = {
  getKfcDishById: ctrlWrapper(getKfcDishById),
};
