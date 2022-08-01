window.scrollTo({left:0, top:0, behavior: `smooth`})


const toggleButton = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
toggleButton.addEventListener('click', () => {
 navLinks.classList.toggle('active')
});

function closeMenu() {
navLinks.classList.toggle ('active');
}

