let seven

function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('seven')
  
  seven = createGraphics(700,700)
  
  seven.textSize(500)
  seven.textAlign(CENTER, CENTER)
  seven.fill("#FFC513")
  seven.textFont (font)
  seven.text("7", 350, 300)
}

function draw () {
  
  clear()
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) {

        let wave = (winMouseX - windowWidth/2)/6
      
      const distortion = sin(frameCount * 0.4 + x * 5 + y * 0.5) * wave
      
      //source
      const sx = x * tileSize + distortion
      const sy = y * tileSize + distortion*0.5
      const sw = tileSize
      const sh = tileSize
      
      //destination
      const dx = x * tileSize - distortion*0.5
      const dy = y * tileSize 
      const dw = tileSize
      const dh = tileSize  
      
      image (seven, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}