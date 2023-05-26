const { KfcDish } = require("../../models/kfcDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const updateKfcDish = async (req, res, next) => {
  const { dishId } = req.params;
  const result = await KfcDish.findByIdAndUpdate(dishId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json(result);
};

module.exports = {
  updateKfcDish: ctrlWrapper(updateKfcDish),
};
