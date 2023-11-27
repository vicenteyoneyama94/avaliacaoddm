const express = require('express');

const app = express();
const PORT = 3002;

const data = [
  { id: 1, nome: 'Item 1' },
  { id: 2, nome: 'Item 2' },
  { id: 3, nome: 'Item 3' },
];

app.use(express.json());

app.get('/data', (req, res) => {
  // Lógica para retornar os dados
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Serviço de Dados rodando na porta ${PORT}`);
});
