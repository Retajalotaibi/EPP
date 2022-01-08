//import the models
const FeedbackModel = require("./feedback");

//express
const express = require("express");
const router = express.Router();

router.post("/send", async (req, res) => {
  const { rate, text } = req.body;
  try {
    const newFeedBack = new FeedbackModel({
      rate: rate,
      text: text,
    });

    newFeedBack.save();
    res.send("worked");
  } catch (error) {
    res.statusCode(400).send("error");
    console.log("error", error);
  }
});

router.get("/", async (req, res) => {
  let messages = await FeedbackModel.find();
  res.send(messages);
});

module.exports = router;
