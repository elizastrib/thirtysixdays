let i

function preload () {
  font = loadFont("fonts/spacegrotesk-medium.otf")
}

function setup () {
  var canvas = createCanvas(600, 600)
  canvas.parent('i')
  
  i = createGraphics(600,600)
  
  i.textSize(800)
  i.textAlign(CENTER, CENTER)
  i.fill("#e84e3c") 
  i.textFont (font) 
  i.text("iii", 300, 240)
}

function draw () {
  
  background("#e8dad9") 
  
  const tileSize = 10
  
  for (let x=0; x<60; x=x+1) { 
    for (let y=0; y<60; y=y+1) { 
      
      const distortion = cos(frameCount * 0.3 + x * 0.2 + y * 0.7) * 20
      
      //source
      const sx = x * tileSize + distortion
      const sy = y * tileSize
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize 
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      image (i, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}