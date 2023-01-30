const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
    res.render('index', {title: 'Suda Home'});
});

app.get('/download', (req,res) => {
    res.render('download', {title: 'Suda Download'});
});

app.get('/about', (req,res) => {
    res.render('about', {title: 'Suda About'});
});

app.post('/download', (req,res) => {
    const file = `${__dirname}/public/Suda Application.exe`;
    res.download(file);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});