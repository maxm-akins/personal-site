const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require(".//middleware/credentials");
const cookieParser = require("cookie-parser");
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(credentials);
app.use(cors(corsOptions));
app.use(cookieParser());

const dbURL =
  process.env.MONGO_URL;

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connected!"));


app.use('/data', require('./routes/data'));


app.listen(3001, console.log("listening on port 3001"));
