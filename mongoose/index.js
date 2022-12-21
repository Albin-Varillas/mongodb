const { default: mongoose } = require("mongoose");
const { User } = require("./models/User");
const express = require("express");
const app = express();

const url =
  "mongodb+srv://albin:albin@cluster0.sh8d5o1.mongodb.net/test?retryWrites=true&w=majority";

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(url);

  app.get("/users", async (req, res) => {
    const users = await User.find({ name: "Albin" });
    res.send(users);
  });

  app.get("/users", async (req, res) => {
    const users = await User.find({ name: "Albin" });
    res.send(users);
  });

  app.listen(3000);
}

main();
