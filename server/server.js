const express = require("express");
const mongoose = require("mongoose");
// const dbURI = require("./config/key");
const cors = require('cors');
require('dotenv').config();

const app = express();

const dbURI = process.env.DATABASE;

const connectDB = async () => {
    await mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("MongoDB Connected"))
      .catch((err) => console.log(err));
};
connectDB();

app.use(express.json());
app.use(cors());

app.use(require("./routes/todos"));

//LISTENING ON PORT 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is Listening on port ${port}`);
});
