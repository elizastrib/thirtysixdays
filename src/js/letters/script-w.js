let w

function preload () {
  font = loadFont("fonts/fredokaone-regular.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('w')
  
 	w = createGraphics(700,700)
  
  w.textSize(500)
  w.textAlign(CENTER, CENTER)
  w.fill("#FF9494")
  w.textFont (font)
  w.text("W", 350, 280)
}

function draw () {
  
  background("#F9E2ED")
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) {
      
      const distortion = tan(frameCount * 0.3 + x * 0.7 + y * 3) * 10
      
      //source
      const sx = x * tileSize + distortion*0.5
      const sy = y * tileSize + distortion
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize - distortion*0.2
      const dy = y * tileSize 
      const dw = tileSize
      const dh = tileSize  
      
      image (w, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}