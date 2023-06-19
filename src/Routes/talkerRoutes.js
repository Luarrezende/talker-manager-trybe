const express = require('express');
const { getTalker, getTalkerId } = require('../utils/talker');

const router = express.Router();

router.get('/', async (_req, res) => {
  const result = await getTalker();
  if (!result) {
    res.status(200).json([]);
  } else {
    res.status(200).json(result);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await getTalkerId(id);
  if (!result) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(result); 
});

module.exports = router;
