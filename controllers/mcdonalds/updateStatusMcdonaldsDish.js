const { McdonaldsDish } = require("../../models/mcdonaldsDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const updateStatusMcdonaldsDish = async (req, res, next) => {
  const { dishId } = req.params;
  const result = await McdonaldsDish.findByIdAndUpdate(dishId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json(result);
};

module.exports = {
  updateStatusMcdonaldsDish: ctrlWrapper(updateStatusMcdonaldsDish),
};
