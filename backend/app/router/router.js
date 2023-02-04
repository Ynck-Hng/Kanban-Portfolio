const express = require("express");
const router = express.Router();
const listRoute = require("./routes/listRoute");
const cardRoute = require("./routes/cardRoute");
const tagRoute = require("./routes/tagRoute");

router.use("/lists", listRoute);
router.use("/cards", cardRoute);
router.use("/tags", tagRoute);

module.exports = router;