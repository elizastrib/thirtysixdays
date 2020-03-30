let one


function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}

function setup () {
  var canvas = createCanvas(800, 800)
  canvas.parent('one')
  
  one = createGraphics(800,800)
  
  one.textSize(850)
  one.textAlign(CENTER, CENTER)
  one.fill("#DD95FF") 
  one.textFont (font) 
  one.text("Z", 400, 320)
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
      
      image (one, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}