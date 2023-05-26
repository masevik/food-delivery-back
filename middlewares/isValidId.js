const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../utils");

const isValidId = (req, res, next) => {
  const { dishId } = req.params;
  if (!isValidObjectId(dishId)) {
    next(HttpError(400, `${dishId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
