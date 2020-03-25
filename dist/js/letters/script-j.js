let j

function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}

function setup () {
  var canvas = createCanvas(600, 600)
  canvas.parent('j')
  
  j = createGraphics(600,600)
  
  j.textSize(800)
  j.textAlign(CENTER, CENTER)
  j.fill("#ff4480") 
  j.textFont (font) 
  j.text("J", 300, 240)
}

function draw () {
  
  background("#2c0303") 
  
  const tileSize = 5
  
  for (let x=0; x<120; x=x+1) { 
    for (let y=0; y<120; y=y+1) { 
      
      const distortion = cos(frameCount * 0.05 + x * 0.1 + y * 1.2) * 60
       
      //source
      const sx = x * tileSize + distortion*0.3
      const sy = y * tileSize + distortion
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize + distortion*0.6 
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize
      
      image (j, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}