// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const FAQ = require('./models/FAQ');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/faq_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create FAQ
app.post('/faqs', async (req, res) => {
  const { question, answer } = req.body;
  const faq = new FAQ({ question, answer });
  await faq.save();
  res.status(201).json(faq);
});

// Get FAQs with language support
app.get('/faqs', async (req, res) => {
  const lang = req.query.lang || 'en';
  const faqs = await FAQ.find();
  const translatedFAQs = faqs.map((faq) => ({
    question: faq.getTranslatedQuestion(lang),
    answer: faq.getTranslatedAnswer(lang),
  }));
  res.json(translatedFAQs);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});