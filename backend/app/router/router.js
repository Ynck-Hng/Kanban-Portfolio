const express = require("express");
const router = express.Router();
const listRoute = require("./routes/listRoute");
const cardRoute = require("./routes/cardRoute");
const tagRoute = require("./routes/tagRoute");

router.get("/", (req,res) => {
    res.send("oui");
})

module.exports = router;