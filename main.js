window.scrollTo({left:0, top:0, behavior: `smooth`})


const toggleButton = document.getElementById('paw');
const navLinks = document.getElementById('navLinks');
toggleButton.addEventListener('click', () => {
 navLinks.classList.paw('active')
});

function closeMenu() {
navLinks.classList.toggle ('active');
}

let pattern = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

function checkEmailAddress(email_address) {
  let result = pattern.test(email_address);
  console.log(result);
}

checkEmailAddress('suejim74@gmail.com');