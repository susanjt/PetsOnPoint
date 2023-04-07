fetch("table.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(tables){
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for(let table of tables){
        out += `
        <tr>
        <td>${table.Services}</td>
        <td>${table.Includes} </td>
        <td>${table.Price}</td>
        </tr>
        `;
      }
      placeholder.innerHTML = out;
    });
