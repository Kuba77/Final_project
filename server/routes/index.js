const express = require("express");
const router = express.Router();
const path = require("path");

// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../static/index.html"));
// });

router.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client/build/')});
});

module.exports = router;
