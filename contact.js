/* eslint-disable no-undef */
`use strict`;
let pattern = new RegExp(`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`);

function checkEmailAddress(email_address) {
 let result = pattern.test(email_address);
  console.log(email_address);
}

checkEmailAddress();
