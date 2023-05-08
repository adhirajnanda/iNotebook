const express = require("express");
var cors = require("cors");
const connectDB = require("./db");
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

//Routes

// app.get("/", (req, res) => {
//   res.send("Hello DB Admin Adhiraj!");
// });
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/notes", require("./routes/notes.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`iNotebook Backend running on port ${PORT}`)
);
