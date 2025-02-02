// models/FAQ.js
const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  question_hi: { type: String, default: '' }, // Hindi translation
  question_bn: { type: String, default: '' }, // Bengali translation
  answer_hi: { type: String, default: '' }, // Hindi translation
  answer_bn: { type: String, default: '' }, // Bengali translation
});

FAQSchema.methods.getTranslatedQuestion = function (lang) {
  return this[`question_${lang}`] || this.question;
};

FAQSchema.methods.getTranslatedAnswer = function (lang) {
  return this[`answer_${lang}`] || this.answer;
};

module.exports = mongoose.model('FAQ', FAQSchema);