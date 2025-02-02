const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate({ key: 'YOUR_GOOGLE_API_KEY' });

app.post('/faqs', async (req, res) => {
  const { question, answer } = req.body;
  const faq = new FAQ({ question, answer });

  // Translate to Hindi
  const [questionHi] = await translate.translate(question, 'hi');
  const [answerHi] = await translate.translate(answer, 'hi');
  faq.question_hi = questionHi;
  faq.answer_hi = answerHi;

  // Translate to Bengali
  const [questionBn] = await translate.translate(question, 'bn');
  const [answerBn] = await translate.translate(answer, 'bn');
  faq.question_bn = questionBn;
  faq.answer_bn = answerBn;

  await faq.save();
  res.status(201).json(faq);
});