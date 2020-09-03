const express = require("express");
const mongoose = require("mongoose");

const videos = require("./dbModels.js");

//app config
const app = express();
const PORT = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//DB config
const CONNECTION_URL =
  "mongodb+srv://admin:jHt5WMApaj7itfPV@cluster0.3wbkg.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api end points
app.get("/v2/posts", (req, res) => {
  videos.find({}, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  videos.create(dbVideos, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

//listen
app.listen(PORT, () => console.log("listening..."));
