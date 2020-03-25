 let b

function preload () {
  font = loadFont("fonts/spacegrotesk-medium.otf")
}

function setup () {
  var canvas = createCanvas(600, 600)
  canvas.parent('b')
  
  b = createGraphics(600,600)
  
  b.textSize(800)
  b.textAlign(CENTER, CENTER)
  b.fill("#ffffff")
  b.textFont (font)
  b.text("B", 300, 240)
}

function draw () {
  
  background("#000000")
  
  const tileSize = 50
  
  for (let x=0; x<12; x=x+1) { 
    for (let y=0; y<12; y=y+1) {
      
      const distortion = tan(frameCount * 0.1 + x * 0.5 + y * 0.1) * 15
      
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
      
      image (b, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}