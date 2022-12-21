//uppgiften finns här https://docs.google.com/presentation/d/1gejuhP_dt4pBA5OjnBbt8QSI6CVELgrcHE03XTeKyeY/edit#slide=id.g1764d36829d_0_72

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const url =
  "mongodb+srv://albin:albin@cluster0.sh8d5o1.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose.connect(url, () => {
  console.log("Connected to MongoDB");
});

const matchSchema = new mongoose.Schema({
  teams: [
    {
      name: {
        type: String,
        required: true,
      },
      goals: {
        type: Number,
        default: 0,
      },
      headCoach: {
        type: String,
      },
      players: [
        {
          goalkeapper: {
            name: String,
            number: Number,
          },
          defense: {
            position: String,
            name: String,
            number: Number,
          },
          midfielder: {
            position: String,
            name: String,
            number: Number,
          },
          forwrad: {
            position: String,
            name: String,
            number: Number,
          },
        },
      ],
    },
  ],
  date: {
    type: Date,
  },
});

const Match = mongoose.model("Match", matchSchema);

app.get("/", (req, res) => {
  res.send("Hej och välkommen");
});

app.get("/match", async (req, res) => {
  const matches = await Match.insertMany([
    { teams: [{ name: "Ronaldo FC", goals: 3 }, { name: "Messi FC" }] },
    { teams: [{ name: "Madrid FC", goals: 3 }, { name: "Barca FC" }] },
  ]);

  res.json(matches);
});

app.listen(3000);
