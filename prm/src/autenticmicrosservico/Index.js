// AuthMicroservice/index.js
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/login', (req, res) => {
  // Lógica de autenticação aqui
  const { username } = req.body;
  const token = jwt.sign({ username }, 'segredo');

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Serviço de Autenticação rodando na porta ${PORT}`);
});
