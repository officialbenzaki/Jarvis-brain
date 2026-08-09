 const express = require('express');
const cors = require('cors'); // <-- HII NDIO TUNAONGEZA
const { OpenAI } = require('openai');
const app = express();
const port = process.env.PORT || 10000;

app.use(cors()); // <-- NA HII HAPA INAFUNGUA KWA NETLIFY
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/jarvis', async (req, res) => {
  try {
    const { message } = req.body;
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.json({ answer: response.choices[0].message.content }); // <-- JINA NI "answer"
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Jarvis Online');
});

app.listen(port, () => {
  console.log(`Jarvis listening on port ${port}`);
});
