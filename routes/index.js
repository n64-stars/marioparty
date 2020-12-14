const express = require("express");
const router = express.Router();
const Player = require("../model/player");

router.get("/", async (req, res) => {
  const players = await Player.find();
  return res.status(200).json(players);
});

module.exports = router;
