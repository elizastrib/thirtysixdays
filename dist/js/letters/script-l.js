let l

function preload () {
  font = loadFont("fonts/fredokaone-regular.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('l') 
  
 	l = createGraphics(700,700)
  
  l.textSize(850)
  l.textAlign(CENTER, CENTER)
  l.fill("#fff79b")
  l.textFont (font)
  l.text("L", 350, 250)
}

function draw () {
  
  background("#000000")
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) {
      
      const distortion = tan(frameCount * 0.1 + x * 0.5 + y * 5) * 20
      
      //source   
      const sx = x * tileSize + distortion*0.5
      const sy = y * tileSize + distortion*0.5
      const sw = tileSize *2
      const sh = tileSize
      
      //destination
      const dx = x * tileSize
      const dy = y * tileSize 
      const dw = tileSize *2
      const dh = tileSize  
      
      image (l, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}     
