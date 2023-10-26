require('dotenv').config();

const { APP_PORT } = process.env;

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

app.get('/', function (_request, response) {
    response.sendStatus(200); // API base get request
})

const routes = require('./routes');

app.use('/events', routes.eventsAPI);

app.listen(APP_PORT, function () {
    console.log(`Backend API started on port ${APP_PORT}`)
})