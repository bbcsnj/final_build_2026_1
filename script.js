const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (navbarLinks.classList.contains('active')) 
  {
    navbarLinks.classList.remove('active');
  } 
  else 
  {
    navbarLinks.classList.add('active');
  }
}
