require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.use(express.json());

app.use(cors());




app.listen(port, () => console.log(`App listening on port ${port}`));




