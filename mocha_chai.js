// test/faq.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const FAQ = require('../models/FAQ');

chai.use(chaiHttp);
const { expect } = chai;

describe('FAQ API', () => {
  beforeEach(async () => {
    await FAQ.deleteMany({});
  });

  it('should create a new FAQ', async () => {
    const res = await chai
      .request(server)
      .post('/faqs')
      .send({ question: 'What is Node.js?', answer: 'Node.js is a runtime.' });
    expect(res.status).to.equal(201);
    expect(res.body.question).to.equal('What is Node.js?');
  });
});