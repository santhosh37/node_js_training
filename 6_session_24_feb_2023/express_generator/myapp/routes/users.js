var express = require("express");
var router = express.Router();
const userController = require("./../controllers/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send("respond with a resource");
  userController.list(req, res);
});

router.post("/", (req, res) => {
  // res.json({ message: "Got a POST request" });
  userController.create(req, res);
});

module.exports = router;
