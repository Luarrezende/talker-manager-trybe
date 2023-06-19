const fs = require('fs').promises;
const { join } = require('path');

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

// const getTalkerId = (id) => {
//   const talkers = talkerFiles();
//   const find = talkers.find((talker) => talker.id === Number(id));
//   return find;
// };

module.exports = { getTalker };