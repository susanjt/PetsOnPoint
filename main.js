require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.json({ message: "success!" }));

app.listen(port, () => console.log(`App listening on port ${port}`));



//window.scrollTo({left:0, top:0, behavior: `smooth`})


const toggleButton = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
toggleButton.addEventListener('click', () => {
 navLinks.classList.toggle('active');
});

function closeMenu() {
navLinks.classList.toggle ('active');
}

$('#bt').click(function () {
    $.getJSON("https://storage.cloud.google.com/sjtdocs/petcare.json", function (data) {
        let keys;
        let items = [];

    $.each(data, function (index, value) {
        keys= Object.keys(value);
        items.push(value);
    });

    let table = document.createElement("table");
    let tr = table.insertRow(-1);

    for (let i = 0; i< keys.length; i++) {
        let th = document.createElement ('th');
        th.innerHTML = keys [i];
        tr.appendChild(th);
    }

    for (let k = 0; k < items,length; k++) {
        tr = table.insertRow(-1);

    for (let j = 0; j < keys.length; j++) {
        let tabCell = tr.insertCell(-1);

    if (Math.sign(items[k][keys[j]]) === -1) {
        tabCell.innerHTML = '<span style="color:blue;">' +
        items [k][keys[j]];
    }
    }
    }

    let eleShow = document.getElementById('showData');
    eleShow.innerHTML = '';
    eleShow.appendChild(table);
    });
});