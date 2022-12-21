const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 10,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    emailVerified: {
      type: Boolean,
    },
    address: {
      zip: Number,
      street: {
        type: String,
      },
    },
    husdjur: [{ pet: String, name: String }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
