let s

function preload () {
  font = loadFont("fonts/spacegrotesk-medium.otf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('s')
  
  s = createGraphics(700,700)
  
  s.textSize(800)
  s.textAlign(CENTER, CENTER)
  s.fill("#FFD057")
  s.textFont (font)
  s.text("S", 350, 240)
}

function draw () {
  
  background("#E0F0F9")
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) {
      
      const distortion = sin(frameCount * 0.3 + x * 0.1 + y * 0.05) * 50
      
      //source
      const sx = x * tileSize + distortion
      const sy = y * tileSize
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize
      const dy = y * tileSize  + distortion
      const dw = tileSize
      const dh = tileSize
      
      image (s, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}