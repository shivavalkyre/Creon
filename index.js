const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

// modules
const meta = require('./meta.js')
const news = require('./news.js')
const promise = require('./promise.js')

//route
app.get('/api/v1/meta',meta.convertMetaToUser)
app.get('/api/v1/news',news.convertMetaToUser)
app.get('/api/v1/promise',promise.convertMetaToUser)

app.listen(3006, () => {
    console.log("Server running");
});