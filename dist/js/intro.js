let font
let graphic
var easing = 0.05
var bg = "#3900f5"
var cl = "ffffff"





const body = document.querySelector('body')
const letterContainers = document.querySelectorAll('div.letters div')
const letters = document.querySelectorAll('div.letters div a')
const title = document.querySelector('canvas')




for (var i = 0; i < letterContainers.length; i++) {
  letterContainers[i].addEventListener('mouseover', function (letter) {
      bg = this.dataset.bg
      body.style.backgroundColor=bg
  })
  letterContainers[i].addEventListener('mouseleave', function () {
      body.style.backgroundColor="#3900f5"
      bg = "#3900f5"
  })


}
for (var i = 0; i < letters.length; i++) {
  letters[i].addEventListener('mouseover', function (letter) {
      cl = this.dataset.cl
      this.style.color=cl
      console.log(cl)
  })
  letters[i].addEventListener('mouseleave', function () {
      this.style.color="#ffffff"
      cl="#ffffff"
  })
}




function preload () {
  font = loadFont("fonts/spacegrotesk-medium.otf")
}

function setup () {
  createCanvas (1500, 500)
  

  graphic = createGraphics(1500, 500)
  
  const text = "Thirty Six Days\nof (Kinetic) Type"
  
  graphic.fill(cl)
  graphic.textSize(180)
  graphic.textAlign(CENTER, CENTER)
  graphic.textFont(font)
  graphic.textLeading(200)
  graphic.text(text, 750, 200)

}

function draw () {
  clear()
  
  const tileSize = 10
  
  for (let x=0; x<300; x=x+1) {
    for (let y=0; y<60; y=y+1) {
      
      const wave = 0.05
      const xDistort = winMouseX*0.02 - 20
      const yDistort = winMouseY*0.02 - 20

      const distortion = frameCount
      
      const distortionX = sin(distortion * wave + x + y * 0.3) * xDistort
      const distortionY = sin(distortion * wave + x * 0.5 + y * 0.2) * yDistort
      
      //source
      let sx = x * tileSize + distortionX
      let sy = y * tileSize + distortionY
      let sw = tileSize
      let sh = tileSize
      //destination
      let dx = x * tileSize
      let dy = y * tileSize
      let dw = tileSize
      let dh = tileSize
      
       image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)   
       
    }
  }
  }







