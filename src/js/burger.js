const burger = document.querySelector('.burger')
const navMenu = document.querySelector('.nav-menu')
const links = document.querySelectorAll('.link')
const test = document.querySelector('.test')
const prevScrollpos = window.pageYOffset

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navMenu.classList.toggle('active')
    test.classList.toggle('active')
})

links.forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    navMenu.classList.remove('active')
    test.classList.remove('active')
}))

document.onclick = function (event) {
    if (event.target == test) {
        navMenu.classList.remove('active')
        burger.classList.remove('active')
        test.classList.remove('active')
    }
}

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset
    if (prevScrollpos < currentScrollPos) {
      navMenu.classList.remove('active')
      burger.classList.remove('active')
      test.classList.remove('active')
    }
    prevScrollpos = currentScrollPos
  }

