const fs = require('fs').promises;
const { join } = require('path');
const path = require('path');

const talkerFiles = async () => {
  const path = '../talker.json';
  try {
    const conteudo = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(conteudo);
  } catch (err) {
    console.log(`Erro ao ler o arquivo: ${err.path}`);
    return [];
  }
};

const getTalker = () => {
  const talkers = talkerFiles();
  return talkers;
};

const getTalkerId = async (id) => {
  const talkers = await talkerFiles();
  const find = talkers.find((talker) => talker.id === Number(id));
  return find;
};

const truePath = path.resolve(__dirname, '..', 'talker.json');

const readFile = async () => {
  const result = await fs.readFile(truePath, 'utf-8');
  return JSON.parse(result);
};

const writeFile = async (updateData) => {
  await fs.writeFile('src/talker.json', updateData);
};

module.exports = { getTalker, getTalkerId, readFile, writeFile };