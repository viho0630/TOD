const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('nav-links')[0]
const selection = document.getElementsByClassName('section')[0]
const logo = document.getElementsByClassName('logo')[0]
toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
    selection.classList.toggle('active')
    logo.classList.toggle('active')
})