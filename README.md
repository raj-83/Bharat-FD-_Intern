# Bharat-FD-_Intern
Different program using node js



# FAQ Management System

## Installation
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the server: `node server.js`.

## API Usage
- Create FAQ: `POST /faqs`
- List FAQs: `GET /faqs?lang=hi`

## Contribution Guidelines
- Follow ES6 conventions.
- Write tests for new features.

git commit -m "feat: Add multilingual FAQ model"
git commit -m "fix: Improve translation caching"
git commit -m "docs: Update README with API examples"



FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]


version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo
  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"


      //runwith docker
      docker-compose up
