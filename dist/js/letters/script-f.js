let f

function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('f')
  
 	f = createGraphics(700,700)
  
  f.textSize(850)
  f.textAlign(CENTER, CENTER)
  f.fill("#D6F0FF")
  f.textFont (font)
  f.text("F", 350, 250)
}

function draw () {
  
  background("#ff4da2")
  
  const tileSize = 10
  
  for (let x=0; x<70; x=x+1) { 
    for (let y=0; y<70; y=y+1) {
      
      const distortion = tan(frameCount * 0.2 + x * 0.1 + y * 1) * 5
      
      //source
      const sx = x * tileSize + distortion
      const sy = y * tileSize
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize - distortion*0.3
      const dy = y * tileSize 
      const dw = tileSize
      const dh = tileSize  
      
      image (f, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}