const express = require("express");
const router = express.Router();
const listController = require("./../../controllers/listController");

// Currently on route http://localhost:PORT/lists/

router.get("/", listController.findAllLists);
router.post("/", listController.createOnelist);
router.get("/:listId", listController.findOneList);
router.patch("/:listId", listController.updateOneList);
router.delete("/:listId", listController.deleteOneList);

module.exports = router;