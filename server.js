const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const ejs = require('ejs');

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});