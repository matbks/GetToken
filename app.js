const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3009;

// Middleware para analisar o corpo das solicitações POST
app.use(bodyParser.json());

app.post('/authenticate', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Verifique se o nome de usuário e a senha correspondem aos valores esperados
  if (username === 'contato@moovi.education' && password === '123456') {
    // Se os valores forem corretos, retorne o token
    res.json({ token: 'adwidjWA124jllkkkk' });
  } else {
    // Se os valores estiverem incorretos, retorne um erro
    res.status(401).json({ error: 'Authentication failed' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
