const { Schema, model, Types } = require("mongoose");

const schema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    contacts: {
      type: [Types.ObjectId],
      ref: "contacts",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("user", schema);

module.exports = User;
