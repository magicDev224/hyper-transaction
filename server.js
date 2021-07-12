const express = require('express');
const { urlencoded, json } = require('body-parser');
const cors = require('cors');
const newRouter = require('./src/server/routes');
const path = require('path');

const app = express();
const server = require('http').Server(app);
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.set('trust proxy', true);
app.use('/fabric-api', newRouter);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend')));

const distDir = './frontend/docusign/dist';

app.use(express.static(path.join(__dirname, distDir)));

app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = { app: app, server: server };
