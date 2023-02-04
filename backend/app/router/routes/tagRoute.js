const express = require("express");
const router = express.Router();
const tagController = require("./../../controllers/tagController");

// Currently on route http://localhost:PORT/tags/

router.get("/", tagController.findAllTags);
router.post("/", tagController.createOneTag);
router.get("/:tagId", tagController.findOneTag);
router.patch("/:tagId", tagController.updateOneTag);
router.delete("/:tagId", tagController.deleteOneTag);

module.exports = router;