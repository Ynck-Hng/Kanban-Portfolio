const express = require("express");
const router = express.Router();
const listController = require("./../../controllers/listController");
const bodySanitize = require("./../../middlewares/bodySanitizer");

// Currently on route http://localhost:PORT/lists/

router.get("/", listController.findAllLists);
router.post("/", bodySanitize, listController.createOnelist);
router.get("/:listId", listController.findOneList);
router.patch("/:listId", bodySanitize, listController.updateOneList);
router.delete("/:listId", listController.deleteOneList);

module.exports = router;
