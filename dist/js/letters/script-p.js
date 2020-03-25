let p

function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}

function setup () {
  var canvas = createCanvas(600, 600)
  canvas.parent('p')
  
  p = createGraphics(600,600)
  
  p.textSize(850)
  p.textAlign(CENTER, CENTER)
  p.fill("#E9E9E9") 
  p.textFont (font) 
  p.text("P", 300, 240)
}

function draw () {
  
  background("#F46E6E") 
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) { 
      
      const distortion = sin(frameCount * 0.3 + x * 0.1 + y * 0.5) * 20
      
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
      
      image (p, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}