const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static("public"));
app.set("view engine", "ejs");

// routers
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/location", (req, res) => {
  res.render("Getlocation")
})

app.post("/location", (req, res) => {
  const location = req.body.location
  // const groups = Groups.find({"pincode":`${location}`})

  const groups = [{ name: "sec 19" }, { name: "masjid" }]
  res.render("Groups", { groups })
})

// server listening
app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});