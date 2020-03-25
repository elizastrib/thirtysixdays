const nav = document.querySelector("ul.nav")
const section = document.querySelector("section")
const links = document.querySelectorAll(".nav li a")

const style = window.getComputedStyle(section)

const navBG = style.getPropertyValue('color')
const navColor = style.getPropertyValue('background-color')


links.forEach.call(links, function(link) {
  link.style.color = navColor
})

nav.style.backgroundColor = navBG