let c


function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}


function setup () {
  var canvas = createCanvas(800,800)
  canvas.parent('c')
  
  c = createGraphics(800,800)
  
  c.textSize(1100)
  c.fill("#DA4E00")
  c.textAlign(CENTER, CENTER)
  c.textFont(font)
  c.text("C", width/2, (height/2)-100)
}


function draw () {
  background("#F5E1CE")
  
  let val = cos(frameCount * 0.03) * 400
  
  image(c, 0, 0, 800, 400+val, 0, 0, 800, 800)
  image(c, 0, 400+val, 800, 400-val, 0, 0, 800, 800)
}