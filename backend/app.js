const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();
router.get('/hello', (req, res) => {
  res.json({ message: "Bonjour depuis Node sur Netlify !" });
});

// Vos routes doivent utiliser un préfixe (ex: /.netlify/functions/api)
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);