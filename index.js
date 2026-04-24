const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
