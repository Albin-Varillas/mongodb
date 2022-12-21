// uppgiften finns här https://docs.google.com/presentation/d/1bjjOeaX8EG9CRsTu9sA_Mwjg1f8T04Yi8yqHih9V1UE/edit#slide=id.g16e0ab20d7c_0_135

const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://albin:albin@cluster0.sh8d5o1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  const db = client.db("test");
  const users =
    //-------hitta alla som bor i stockholm----------
    //   const users = await db
    //     .collection("users")
    //     .find({
    //       city: "Stockholm",
    //     })
    //     .toArray();
    //   console.log(users);

    // --------lägga till 5 users----------------
    //   await db.collection("users").insertMany([
    //     { name: "Gilbert", age: 5, city: "Stockholm" },
    //     { name: "Adam", age: 19, city: "Stockholm" },
    //     { name: "Emma", age: 12, city: "Kalmar" },
    //     { name: "Fredrik", age: 45, city: "Malmö" },
    //     { name: "Mia", age: 29, city: "Göteborg" },
    //   ]);

    //   --------updatera Gilberts city-----------
    //     await db.collection("users").updateOne(
    //       {
    //         name: "Gilbert",
    //         city: "Stockholm",
    //       },
    //       {
    //         $set: { city: "Malmö" },
    //       }
    //     );

    // --------hitta andvändare över 18 år--------
    //     await db
    //       .collection("users")
    //       .find({ age: { $gte: 18 } })
    //       .toArray();
    //   console.log(users);

    // --------Hämta alla användare och sortera  namn i alfabetiskt ordning

    await db.collection("users").find().sort({ name: 1 }).toArray();
  console.log(users);
}

main();
