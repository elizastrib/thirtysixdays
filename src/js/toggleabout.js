

var openLink = document.querySelector('span.about')
var introDiv = document.querySelector('div.about')
var closeLink = introDiv.querySelector('span')

openLink.addEventListener('click', function(event) {
    introDiv.classList.add('show')
})

closeLink.addEventListener('click', function(event) {
    introDiv.classList.remove('show')
})