let letterY

function preload () {
  font = loadFont("fonts/spacegrotesk-medium.otf")
}

function setup () {
  var canvas = createCanvas(600, 600)
  canvas.parent('y')
  
  letterY = createGraphics(600,600)
  
  letterY.textSize(700)
  letterY.textAlign(CENTER, CENTER)
  letterY.fill("#FFBA94") 
  letterY.textFont (font) 
  letterY.text("Y", 300, 200)
}

function draw () {
  
  clear()
  
  const tileSize = 10
  
  for (let x=0; x<60; x=x+1) { 
    for (let y=0; y<60; y=y+1) { 
      
      const distortion = cos(frameCount * 0.1 + x * 0.1 + y * 0.5) * 10
      
      //source
      const sx = x * tileSize + distortion
      const sy = y * tileSize
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize - distortion
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      image (letterY, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}