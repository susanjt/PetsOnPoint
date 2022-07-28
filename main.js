window.scrollTo({left:0, top:0, behavior: `smooth`})


const toggleButton = document.getElementById('paw');
const navLinks = document.getElementById('navLinks');
toggleButton.addEventListener('click', () => {
 navLinks.classList.paw('active')
});

function closeMenu() {
navLinks.classList.toggle ('active');
}

