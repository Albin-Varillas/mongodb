const express = require("express");
const app = express();
const mongoose = require("mongoose");
//hämta url från database och byt <password>
const url =
  "mongodb+srv://albin:albin@cluster0.sh8d5o1.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

//connecta URL:en
mongoose.connect(url, () => {
  console.log("Connected to data database");
});

// ---------Schema = mall och regler---------
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

// --------------.model=utproducten för att reagera med databasen------
// tar emot två parametar, första till vilken collections vi referar oss till och sen till blueprint Schema
const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.send("Då");
});

app.get("/products", async (req, res) => {
  const sort = req.query.sort;
  const products = await Product.find().sort(
    sort === "name" ? { name: 1 } : sort === "price" ? { price: 1 } : {}
  );
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  //params är dinamiska delar av routen
  const product = await Product.findById(req.params.id);
  res.send(product);
});

app.listen(3000);
