const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// conexão mongo atlas https://www.mongodb.com/
mongoose.connect('url',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
});

const app = express();

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(cors());
app.use(routes);

app.listen(3333, () => {
    console.log('Server Ok.');
});