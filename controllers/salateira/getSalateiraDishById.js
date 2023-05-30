const { SalateiraDish } = require("../../models/salateiraDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const getSalateiraDishById = async (req, res, next) => {
  const { dishId } = req.params;
  const result = await SalateiraDish.findById(dishId, "-createdAt -updatedAt");
  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json(result);
};

module.exports = {
  getSalateiraDishById: ctrlWrapper(getSalateiraDishById),
};
