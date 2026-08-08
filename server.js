const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({status: "Jarvis Online", owner: "officialbenzaki"});
});

app.post('/ask', async (req, res) => {
  const { question } = req.body;
  let answer = "Nimesikia ulisema: " + question + ". Niko tayari kukusaidia Mkuu.";
  res.json({ answer });
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Jarvis Live on ${port}`));
