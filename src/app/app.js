const cfenv = require('cfenv');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// load env vars
require('dotenv').config();

const api = require('./routes/api');
const app = express();
const appEnv = cfenv.getAppEnv();
const http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

// start server on the specified port and binding host
const port = appEnv.isLocal ? 3000 : appEnv.port;
const hostname = appEnv.isLocal ? '0.0.0.0' : appEnv.bind;;

http.listen(port, hostname, () => {
	console.log(`Server started on ${hostname}:${port}.`)
});

module.exports = app;