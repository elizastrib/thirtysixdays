let m

function preload () {
  font = loadFont("fonts/spacegrotesk-medium.otf")
}

function setup () {
  var canvas = createCanvas(1200,600)
  canvas.parent('m')
  
  m = createGraphics(1200, 600)
  
  m.textFont(font)
  m.fill("#bd2828")
  m.textSize(500)
  m.textAlign(CENTER, CENTER)
  m.text("MMM", 600, 240)
}

function draw () {
  background("#d8c9be")

  const tileSize = 50
  
  for (let y = 0; y < 12; y = y+1) {
    
    const distortion = sin(frameCount * 0.05 + y) * 40
    
    const sx = 0 + distortion*0.1
    const sy = y * tileSize + distortion
    const sw = 1200
    const sh = tileSize
    
    const dx = 0
    const dy = y * tileSize
    const dw = 1200
    const dh = tileSize
    
    image(m, dx, dy, dw, dh, sx, sy, sw, sh)
  }
}


