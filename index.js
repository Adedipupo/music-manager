const express = require("express");
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/db");
const app = express();

//configure database and mongoose
mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

  // db configuaration ends here

  //registering cors
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("dev")); // configire morgan
// define first route
app.get("/", (req, res) => {
  res.json("Hola MEVN devs...Assemble");
});
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
