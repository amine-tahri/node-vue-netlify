const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

// Route GET de test
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello depuis Netlify Functions!' });
});

// Route GET - liste d'articles
app.get('/api/articles', (req, res) => {
  const articles = [
    { id: 1, titre: 'Premier article', contenu: 'Contenu du premier article.' },
    { id: 2, titre: 'Deuxième article', contenu: 'Contenu du deuxième article.' },
  ];
  res.json(articles);
});

// Route POST - créer un article
app.post('/api/articles', (req, res) => {
  const { titre, contenu } = req.body;
  if (!titre || !contenu) {
    return res.status(400).json({ erreur: 'titre et contenu sont requis' });
  }
  res.status(201).json({ id: Date.now(), titre, contenu });
});

module.exports.handler = serverless(app);
