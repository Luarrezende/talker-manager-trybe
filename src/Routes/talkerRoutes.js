const express = require('express');
const { getTalker } = require('../utils/talker');

const router = express.Router();

router.get('/', async (_req, res) => {
  const result = await getTalker();
  if (!result) {
    res.status(200).json([]);
  } else {
    res.status(200).json(result);
  }
});

// router.get('/:id', async (_req, res) => {
//   const result = await getTalkerId();
//   try {
//     return res.status(200).json(result);
//   } catch (error) {
//     return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
//   }
// });

module.exports = router;
