let r    

function preload () {
  font = loadFont("fonts/ultra-regular.ttf")
}

function setup () {
  var canvas = createCanvas(800, 500)
  canvas.parent('r')
  
 	r = createGraphics(800,500)
  
  r.textSize(500)
  r.textAlign(CENTER, CENTER)
  r.fill("#FDA5B5")
  r.textFont (font)
  r.text("R", 400, 200)
}

function draw () {
  
  background("#864E0C")
  
  const tileSize = 5
  const block = 25
  
  for (let x=0; x<160; x=x+1) { 
    for (let y=0; y<100; y=y+1) {
      
      let position = frameCount
      position = position % 100
      if (position > 50) {
        position = 100 - position
      }
      position = position/50
      position = easeInOutCubic(position)
         
      
      const distortion = sin(frameCount * 0.1 + x * 0.5 + y * 0.2) * 10
      
      //source
      const sx = x * tileSize * position + distortion*0.5
      const sy = y * tileSize  + distortion*0.5
      const sw = tileSize * position + (400 - tileSize) * (1 - position)
      const sh = block
      
      //destination
      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = block
      
      image (r, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}





