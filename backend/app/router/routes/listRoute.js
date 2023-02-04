const express = require("express");
const router = express.Router();
const listController = require("./../../controllers/listController");

// Currently on route /lists

router.get("/", listController.findAllList);


module.exports = router;