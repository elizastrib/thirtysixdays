let font
let a

function preload () {
  font = loadFont("fonts/spacegrotesk-medium.otf")
}

function setup () {
  var canvas = createCanvas(600, 600)
  canvas.parent('a')
  
  a = createGraphics(600,600)
  
  a.textSize(800)
  a.textAlign(CENTER, CENTER)
  a.fill("#0000ff")
  a.textFont (font)
  a.text("A", 300, 240)
}

function draw () {
  
  background("#ffe2e2")
  
  const tileSize = 25
  
  for (let x=0; x<24; x=x+1) { 
    for (let y=0; y<24; y=y+1) {
      
      const distortion = sin(frameCount * 0.1 + x * 0.2 + y * 0.7) * 20
      
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
      
      image (a, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}