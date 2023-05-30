const { getSalateiraDishes } = require("./getSalateiraDishes");
const { getSalateiraDishById } = require("./getSalateiraDishById");
const { addSalateiraDish } = require("./addSalateiraDish");
const { updateSalateiraDish } = require("./updateSalateiraDish");
const { updateStatusSalateiraDish } = require("./updateStatusSalateiraDish");
const { removeSalateiraDish } = require("./removeSalateiraDish");

module.exports = {
  getSalateiraDishes,
  getSalateiraDishById,
  addSalateiraDish,
  updateSalateiraDish,
  updateStatusSalateiraDish,
  removeSalateiraDish,
};
