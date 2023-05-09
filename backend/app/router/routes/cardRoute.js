const express = require("express");
const router = express.Router();
const cardController = require("./../../controllers/cardController");
const bodySanitize = require("./../../middlewares/bodySanitizer");
// Currently on route http://localhost:PORT/cards/

router.get("/", cardController.findAllCards);
router.post("/", bodySanitize, cardController.createOneCard);
router.get("/:cardId", cardController.findOneCard);
router.patch("/:cardId", bodySanitize, cardController.updateOneCard);
router.delete("/:cardId", cardController.deleteOneCard);
router.post("/:cardId/tags", bodySanitize, cardController.addOneTagToCard);
router.delete("/:cardId/tags/:tagId", cardController.removeOneTagFromCard);

module.exports = router;
