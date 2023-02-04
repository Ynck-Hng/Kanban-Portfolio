const express = require("express");
const router = express.Router();
const listController = require("./../../controllers/listController");

// Currently on route /lists

router.get("/", listController.findAllLists);
router.post("/", listController.createOnelist);
router.get("/:listId", listController.findOneList);


module.exports = router;