let k

function preload () {
  font = loadFont("fonts/fredokaone-regular.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('k')
  
 	k = createGraphics(700,700)
  
  k.textSize(850)
  k.textAlign(CENTER, CENTER)
  k.fill("#6fd1ff")
  k.textFont (font)
  k.text("K", 350, 250)
}

function draw () {
  
  background("#d6f2ff")
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) {
      
      const distortion = sin(frameCount * 0.1 + x * 0.5 + y * 5) * 50
      
      //source
      const sx = x * tileSize + distortion
      const sy = y * tileSize + distortion
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize - distortion*0.5
      const dy = y * tileSize 
      const dw = tileSize
      const dh = tileSize  
      
      image (k, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}