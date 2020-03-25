let e

function preload () {
  font = loadFont("fonts/fredokaone-regular.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('e')
  
 	e = createGraphics(700,700)
  
  e.textSize(850)
  e.textAlign(CENTER, CENTER)
  e.fill("#CF0000")
  e.textFont (font)
  e.text("E", 350, 250)
}

function draw () {
  
  background("#ffffff")
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) {
      
      const distortion = sin(frameCount * 0.6 + x * 0.1 + y * 1) * 35
      
      //source
      const sx = x * tileSize
      const sy = y * tileSize + distortion
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize - distortion*0.5
      const dy = y * tileSize 
      const dw = tileSize
      const dh = tileSize  
      
      image (e, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}