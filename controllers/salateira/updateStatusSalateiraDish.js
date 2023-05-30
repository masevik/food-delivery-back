const { SalateiraDish } = require("../../models/salateiraDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const updateStatusSalateiraDish = async (req, res, next) => {
  const { dishId } = req.params;
  const result = await SalateiraDish.findByIdAndUpdate(dishId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json(result);
};

module.exports = {
  updateStatusSalateiraDish: ctrlWrapper(updateStatusSalateiraDish),
};
