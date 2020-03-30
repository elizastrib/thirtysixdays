let zero


function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(800, 800)
  canvas.parent('zero')
  
  zero = createGraphics(800,800)
  
  zero.textSize(850)
  zero.textAlign(CENTER, CENTER)
  zero.fill("#000000") 
  zero.textFont (font) 
  zero.text("0", 400, 240)
}

function draw () {
  
  clear()
  
  const tileSize = 5
  
  for (let x=0; x<160; x=x+1) { 
    for (let y=0; y<160; y=y+1) { 

      const wave = (winMouseX*0.07) * -0.3

      const distortion = sin(frameCount * 0.1 + x + y * 0.3) * wave
      
      //source
      const sx = x * tileSize - distortion
      const sy = y * tileSize + distortion
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize  + distortion
      const dy = y * tileSize - distortion
      const dw = tileSize
      const dh = tileSize
      
      image (zero, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}