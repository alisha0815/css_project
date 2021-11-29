const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
console.log(menu, icons);

toggleBtn.addEventListener('click', () => {
  icons.classList.toggle('active');
  menu.classList.toggle('active');
});
