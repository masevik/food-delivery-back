const { SalateiraDish } = require("../../models/salateiraDish");
const { ctrlWrapper } = require("../../utils");

const addSalateiraDish = async (req, res, next) => {
  const result = await SalateiraDish.create(req.body);
  return res.status(201).json(result);
};

module.exports = {
  addSalateiraDish: ctrlWrapper(addSalateiraDish),
};
