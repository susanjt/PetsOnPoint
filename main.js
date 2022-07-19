const toggleButton = document.getElementById('paw');
const navLinks = document.getElementById('navLinks');
toggleButton.addEventListener('click', () => {
 navLinks.classList.paw('active')
});

function closeMenu() {
navLinks.classList.toggle ('active');
}

