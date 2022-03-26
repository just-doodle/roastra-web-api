import Roastra from "roastra";
import express from "express";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.redirect("https://github.com/just-doodle/roastra-web-api#readme");
});

app.get(["/roast/:name", "/roast"], (req, res) => {
  var name = req.params.name || "You";

  var plural = req.query.plural || false;
  if (plural === "true") {
    plural = true;
  } else {
    plural = false;
  }

  var roast = new Roastra({
    name,
    plural,
  });

  roast.Get((data) => {
    res.json(data);
  });
});
