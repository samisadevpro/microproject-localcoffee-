const express = require("express");
const app = express();
const PORT = 3000;
const coffeeShops = require("./data/coffeeShop.json");
// Serve static files from the 'public' directory
app.use(express.static("public"));

// Correct API route
app.get("/api/coffeeShop", (req, res) => {
  res.json(coffeeShops);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
