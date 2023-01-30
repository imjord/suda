const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});