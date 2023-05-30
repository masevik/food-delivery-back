const { SalateiraDish } = require("../../models/salateiraDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const removeSalateiraDish = async (req, res, next) => {
  const { dishId } = req.params;
  const result = await SalateiraDish.findByIdAndDelete(dishId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json({ message: "Dish deleted" });
};

module.exports = {
  removeSalateiraDish: ctrlWrapper(removeSalateiraDish),
};
