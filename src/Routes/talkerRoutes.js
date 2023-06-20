const express = require('express');
const { getTalker, getTalkerId, readFile, writeFile } = require('../utils/talker');
const {
  authorizationV,
  nameV,
  ageV,
  talkV,
  watchedAtV,
  rateV
} = require('../middlewares/talker');

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

router.post('/', authorizationV, nameV,
ageV, talkV, watchedAtV, rateV, async (req, res) => {
  const talkers = await readFile();
  const id = talkers.length + 1;
  const trueTalker = { id, ...req.body };
  talkers.push(trueTalker);
  await writeFile(JSON.stringify(talkers, null, 2));
  return res.status(201).json(trueTalker)
});

module.exports = router;
