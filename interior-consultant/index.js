const menu = document.querySelector('.menu-wrapper')
const menuOpen = document.querySelector('.menuOpen')
const menuClose = document.querySelector('.menuClose')

menuOpen.addEventListener('click', () => {
  menu.classList.add('active')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('active')
})

// function toggleMobileMenu(menu) {
//   menu.classList.toggle('open')
// }
