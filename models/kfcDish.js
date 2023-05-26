const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../utils");
const { HttpError } = require("../utils");

const kfcDishSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for dish"],
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    calories: {
      type: Number,
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

kfcDishSchema.post("save", handleMongooseError);

const schema = Joi.object({
  title: Joi.string().min(3).max(50).trim().required(),
  image: Joi.string().trim().required(),
  description: Joi.string().trim(),
  calories: Joi.number(),
  weight: Joi.number(),
  price: Joi.number().required(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .error(HttpError(400, "missing field favorite")),
});

const schemas = { schema, updateFavoriteSchema };

const KfcDish = model("kfcDish", kfcDishSchema);

module.exports = { KfcDish, schemas };
