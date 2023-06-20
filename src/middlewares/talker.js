const authorizationV = (req, res, next) => {
  const { authorization } = req.headers;
  const authorizationRegex = 16;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (typeof authorization !== 'string' || authorization.length !== authorizationRegex) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

const nameV = (req, res, next) => {
  const { name } = req.body;
  const nameRegex = 3;
  if (!name || name === '') {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < nameRegex) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const ageV = (req, res, next) => {
  const { age } = req.body;
  const ageRegex = 18;
  if (!age || age === '') {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < ageRegex || !Number.isInteger(age)) {
    return res.status(400).json({ 
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    });
  }
  next();
};

const talkV = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  if (!talk.rate && talk.rate !== 0) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  next();
};

const watchedAtV = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  const watchedAtRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  const regex = watchedAtRegex.test(watchedAt);
  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!regex) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};

const rateV = (req, res, next) => {
  const { rate } = req.body.talk;

  if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }
  next();
};

module.exports = { authorizationV, nameV, ageV, talkV, watchedAtV, rateV };