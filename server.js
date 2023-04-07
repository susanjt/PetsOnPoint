/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
require("dotenv").config();
const https = require("node:https");
const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
let port = 3000;


//app.use('/', express.static('public'));

app.use(express.json());

app.use(cors());




app.listen(port, () => console.log(`App listening on port ${port}!`));


app.get('/', (req, res) => {
    res.send('');
});

let opts = {
  method: 'GET',
  url: 'https://www.supersaas.com/api/changes/641837.json?from=2023-04-04%2017:00:00&api_key=',
  body: {
    key: 'value'
  },
  json: true
};

