/* eslint-disable no-undef */
`use strict`;
//let pattern = new RegExp(`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`);

//function checkEmailAddress(email_address) {
 //let result = pattern.test(email_address);
//console.log(email_address);
//}

//checkEmailAddress();

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email_address');
  const emailValue = email.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailValue)) {
    alert('Email is valid');
    form.submit();
  } else { 
    alert('Email is not valid');
  }
});



