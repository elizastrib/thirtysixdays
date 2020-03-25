let g

function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('g')
  
  g = createGraphics(700,700)
  
  g.textSize(850)
  g.textAlign(CENTER, CENTER)
  g.fill("#B7A5FD")
  g.textFont (font)
  g.text("G", 350, 250)
}

function draw () {
  
  background("#DED6FF")
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) {
      
      const distortion = cos(frameCount * 0.4 + x * 0.8 + y * 0.1) * 10
      
      //source
      const sx = x * tileSize
      const sy = y * tileSize + distortion
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize  + distortion
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      image (g, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}