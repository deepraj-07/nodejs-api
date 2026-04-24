FROM node:18-alpine

WORKDIR /app

COPY TestCase3/package*.json ./
RUN npm ci --omit=dev

COPY TestCase3/ ./

EXPOSE 8080

CMD ["node", "index.js"]
