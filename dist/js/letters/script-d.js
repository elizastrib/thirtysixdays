let d

function preload () {
  font = loadFont("fonts/fredokaone-regular.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('d')
  
  d = createGraphics(700,700)
  
  d.textSize(850)
  d.textAlign(CENTER, CENTER)
  d.fill("#FFD3D3")
  d.textFont (font)
  d.text("D", 350, 250)
}

function draw () {
  
  background("#302449")
  
  const tileSize = 10
  
  for (let x=0; x<70; x=x+1) { 
    for (let y=0; y<70; y=y+1) {
      
      const distortion = sin(frameCount * 0.1 + x * 0.2 + y * 0.7) * 20
      
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
      
      image (d, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}