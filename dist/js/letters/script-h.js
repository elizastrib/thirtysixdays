let h

function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('h')
  
  h = createGraphics(700,700)
  
  h.textSize(850)
  h.textAlign(CENTER, CENTER)
  h.fill("#c4fff3")
  h.textFont (font)
  h.text("H", 350, 270)
}

function draw () {
  
  background("#0b3f35")
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) {
      
      const distortion = cos(frameCount * 0.1 + x * 0.1 + y * 0.1) * 50
      
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
      
      image (h, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}