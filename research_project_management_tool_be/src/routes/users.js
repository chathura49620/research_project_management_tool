const router = require("express").Router();

//get all the Items list as a complex object(json)
router.route("/").get((req, res) => {
  res.send("hello");
  console.log("users");
});

module.exports = router;
