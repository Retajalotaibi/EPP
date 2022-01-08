require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./helpers/router");
const cors = require("cors");
// imporant variables

const DB_URL = process.env.MONGOURI || "";
const PORT = process.env.PORT || 1000;

const start = async () => {
  try {
    //connect to dataBase
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to DB , create app");

    //create the app
    const app = express();
    //to pares the body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    //call the route func
    app.use("/feedback", router);
    //setAppRoutes(app);
    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
};

start();
