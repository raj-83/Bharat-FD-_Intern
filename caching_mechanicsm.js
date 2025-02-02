const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

app.get('/faqs', async (req, res) => {
  const lang = req.query.lang || 'en';
  const cacheKey = `faqs_${lang}`;

  // Check cache
  const cachedFAQs = cache.get(cacheKey);
  if (cachedFAQs) {
    return res.json(cachedFAQs);
  }

  // Fetch from database
  const faqs = await FAQ.find();
  const translatedFAQs = faqs.map((faq) => ({
    question: faq.getTranslatedQuestion(lang),
    answer: faq.getTranslatedAnswer(lang),
  }));

  // Cache the result
  cache.set(cacheKey, translatedFAQs);
  res.json(translatedFAQs);
});