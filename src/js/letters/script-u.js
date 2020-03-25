let u

function preload () {
  font = loadFont("fonts/fredokaone-regular.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('u')
  
  u = createGraphics(700,700)
  
  u.textSize(850)
  u.textAlign(CENTER, CENTER)
  u.fill("#083C0D")
  u.textFont (font)
  u.text("U", 350, 250)
}

function draw () {
  
  background("#F8E0F9")
  
  const tileSize = 10
  
  for (let x=0; x<70; x=x+1) { 
    for (let y=0; y<70; y=y+1) {
      
      const distortion = sin(frameCount * 0.1 + x * 0.2 + y * 0.7) * 10
      
      //source
      const sx = x * tileSize + distortion
      const sy = y * tileSize
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize
      const dy = y * tileSize  + distortion * 2
      const dw = tileSize
      const dh = tileSize
      
      image (u, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}