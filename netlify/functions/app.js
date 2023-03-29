const axios = require("axios");
const dotenv = require("dotenv").config();

// get the schedule for a given keyword
 //   let schedule: Schedule = await getScheduleFromDB(keyword);
 //   return schedule;
 //   const apiKey = Supersaas_Api_key;
 //   let apiUrl = "https://www.supersaas.com/schedule/petsonpoint/Appointments";
 //   try {
 //       const response = await fetch(apiUrl, {
 //           method: "GET",
 //           headers: { accept: "application/json" },
 //               "X-Supersaas-Api-key": apiKey,},
 //       );
//        const data = await response.json();} catch(error) {
//            alert(error);

//    }


axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});