const express = require("express");
const router = express.Router();

router.post("/generate", (req, res) => {
  const { name, industry } = req.body;

  const message = `Hey ${name}, I noticed you're in the ${industry} space. I built a tool that helps businesses reply instantly to customer messages and capture more leads. Want to see it?`;

  res.json({ message });
});

module.exports = router;

