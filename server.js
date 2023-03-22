require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.use(express.json());

app.use(cors());




app.listen(port, () => console.log(`App listening on port ${port}`));

const apiUrl = 'https://www.supersaas.com/schedule/petsonpoint/Appointments';
app.get("/schedule", async (req, res, next) => {
    const result = await supersaas.get(apiUrl, {
        headers: {
            "X-Supersaas-Api-Key": process.env.supersaas_api_key,
        },
    });
    res.json(result.data);
});

console.log(process.env.supersaas_api_key);



