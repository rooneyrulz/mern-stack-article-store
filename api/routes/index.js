const express = require("express");
const router = express.Router();

//Index Route
router.get('/home', (req, res, next) => {
  return res.status(200).json({message: 'index page rendered!'});
});

module.exports = router;