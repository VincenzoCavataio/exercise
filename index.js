var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 5000);