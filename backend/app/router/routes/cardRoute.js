const express = require("express");
const router = express.Router();
const cardController = require("./../../controllers/cardController");

// Currently on route http://localhost:PORT/cards/

router.get("/", cardController.findAllCards);
router.post("/", cardController.createOneCard);
router.get("/:cardId", cardController.findOneCard);
router.patch("/:cardId", cardController.updateOneCard);
router.delete("/:cardId", cardController.deleteOneCard);
router.post("/:cardId/tags", cardController.addOneTagToCard);
router.delete("/:cardId/tags/:tagId", cardController.removeOneTagFromCard);

module.exports = router;