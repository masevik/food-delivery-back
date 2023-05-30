const { SalateiraDish } = require("../../models/salateiraDish");
const { ctrlWrapper } = require("../../utils");

const getSalateiraDishes = async (req, res, next) => {
  const result = await SalateiraDish.find({}, "-createdAt -updatedAt");
  return res.status(200).json(result);
};

module.exports = {
  getSalateiraDishes: ctrlWrapper(getSalateiraDishes),
};
