const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const cors = require("cors")

dotenv.config();
app.use(cors())

app.use(express.json());

mongoose 
 .connect("mongodb+srv://pavi:pavi@cluster0.ydkuj.mongodb.net/mapapp?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
          })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8000, () => {
  console.log("Backend server is running!");
});