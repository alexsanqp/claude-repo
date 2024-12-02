const express = require('express');
const app = express();

// Налаштування middleware для парсингу JSON
app.use(express.json());

// Простий GET-маршрут
app.get('/', (req, res) => {
  res.json({ message: 'Привіт! Сервер працює!' });
});

// Налаштування порту
const PORT = process.env.PORT || 3001;

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});