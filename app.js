const express = require('express');
const app = express();
const path = require('path');

// Налаштування EJS як шаблонізатора
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Статичні файли
app.use(express.static(path.join(__dirname, 'public')));

// Роут для головної сторінки
app.get('/', (req, res) => {
    res.render('index');
});

// Роут для сторінки про бригаду
app.get('/about', (req, res) => {
    const team = [
        { name: 'Пилипенко Михайло', role: 'балабол 1' },
        { name: 'Кириченко Назар', role: 'балабол 2' },
        { name: 'Артем Кудрявцев', role: 'балабол 3' }
    ];
    res.render('about', { team });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
