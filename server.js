const express = require('express');
const app = express();

// Налаштування middleware для парсингу JSON
app.use(express.json());

// Простий GET-маршрут
app.get('/', (req, res) => {
  res.json({ message: 'Привіт! Сервер працює!' });
});

// Налаштування порту
const PORT = process.env.PORT || 3002;

// Запуск сервера з обробкою помилок
const server = app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Порт ${PORT} вже використовується`);
    process.exit(1);
  } else {
    console.error('Виникла помилка:', error);
    process.exit(1);
  }
});