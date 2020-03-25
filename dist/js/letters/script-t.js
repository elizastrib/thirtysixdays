let t


function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}


function setup () {
  var canvas = createCanvas(800,800)
  canvas.parent('t')
  
  t = createGraphics(800,800)
  
  t.textSize(1100)
  t.fill("#CECDFF")
  t.textAlign(CENTER, CENTER)
  t.textFont(font)
  t.text("T", width/2, (height/2)-100)
}


function draw () {
  background("#541919")
  
  let val = cos(frameCount * 0.03) * 180
  
  image(t, 0, -400+val, 400, 200+val, 0, 0, 800, 800)
  image(t, 0, -200+val+val, 400, 200-val, 0, 0, 800, 800)
  image(t, 0, 0+val, 400, 200+val, 0, 0, 800, 800)
  image(t, 0, 200+val+val, 400, 200-val, 0, 0, 800, 800)
  image(t, 0, 400+val, 400, 200+val, 0, 0, 800, 800)
  image(t, 0, 600+val+val, 400, 200-val, 0, 0, 800, 800)
  image(t, 0, 800+val, 400, 200+val, 0, 0, 800, 800)
  image(t, 0, 1000+val+val, 400, 200-val, 0, 0, 800, 800)
  
  
  image(t, 400, -200+val, 400, 200+val, 0, 0, 800, 800)
  image(t, 400, val+val, 400, 200-val, 0, 0, 800, 800)
  image(t, 400, 200+val, 400, 200+val, 0, 0, 800, 800)
  image(t, 400, 400+val+val, 400, 200-val, 0, 0, 800, 800)
  image(t, 400, 600+val, 400, 200+val, 0, 0, 800, 800)
  image(t, 400, 800+val+val, 400, 200-val, 0, 0, 800, 800)
}