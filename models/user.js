const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  street: {
    type: String,
    default: "",
  },
  apartment: {
    type: String,
    default: "",
  },
  zip: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  verification_code: String,
});

// inorder to change the _id to id
userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
});

userSchema.plugin(passportLocalMongoose);

module.exports.User = mongoose.model("User", userSchema);
module.exports.userSchema = userSchema;
