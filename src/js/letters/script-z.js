let z

function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}

function setup () {
  var canvas = createCanvas(800, 800)
  canvas.parent('z')
  
  z = createGraphics(800,800)
  
  z.textSize(850)
  z.textAlign(CENTER, CENTER)
  z.fill("#DD95FF") 
  z.textFont (font) 
  z.text("Z", 400, 320)
}

function draw () {
  
  clear()
  
  const tileSize = 5
  
  for (let x=0; x<160; x=x+1) { 
    for (let y=0; y<160; y=y+1) { 
      
      const distortion = cos(frameCount * 1 + x * 0.4 + y * 0.4) * 10
      
      //source
      const sx = x * tileSize - distortion * 5
      const sy = y * tileSize + distortion
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize  + distortion
      const dy = y * tileSize - distortion
      const dw = tileSize
      const dh = tileSize
      
      image (z, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}