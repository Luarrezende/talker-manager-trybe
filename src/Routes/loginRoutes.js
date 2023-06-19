const express = require('express');
const { token } = require('../utils/login');
const { emailV, passwordV } = require('../middlewares/login');

const router = express.Router();

router.post('/', emailV, passwordV, async (req, res) => {
  const generate = token();
  return res.status(200).json({ token: generate });
});

module.exports = router;