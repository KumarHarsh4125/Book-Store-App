const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors"); // ✅ Step 2: import CORS

const app = express();

app.use(cors()); // ✅ Step 3: use CORS middleware
app.use(express.json());
app.use("/books", router);

mongoose.connect("mongodb+srv://krharsh4125:Harsh4125@cluster0.cbjaw0f.mongodb.net/bookStore?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
