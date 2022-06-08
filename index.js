const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const cors = require("cors")

dotenv.config();
app.use(cors({
  origin: "*",
}))

app.use(express.json());
const URL = "mongodb+srv://pavi:pavi@cluster0.ydkuj.mongodb.net/mapapp?retryWrites=true&w=majority";


app.get("/", (req, res) => {
  res.send("Travel App Server is Running");
});


mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
          })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);



const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Backend server is running at ${port}!`);
});