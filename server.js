const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const JARVIS_KEY = process.env.JARVIS_ACCESS_KEY;

app.get('/', (req, res) => {
  res.json({status: "Jarvis Online", owner: "officialbenzaki"});
});

app.post('/api/jarvis', (req, res) => {
  const { key, message } = req.body;
  if (key !== JARVIS_KEY) return res.status(401).json({error: 'Unauthorized'});
  res.json({reply: `Nimesikia: ${message}. Niko tayari kusaidia.`});
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Jarvis Live on ${port}`));
