const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// CSS, images aur JS public folder se serve honge
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about-cars.html", (req, res) => {
  res.sendFile(path.join(__dirname, "about-cars.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});