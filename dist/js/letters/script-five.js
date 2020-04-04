let five

function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(700, 700)
  canvas.parent('five')
  
  five = createGraphics(700,700)
  
  five.textSize(850)
  five.textAlign(CENTER, CENTER)
  five.fill("#FFEDED")
  five.textFont (font)
  five.text("5", 350, 200)
}

function draw () {
  
  clear()
  
  const tileSize = 5
  
  for (let x=0; x<140; x=x+1) { 
    for (let y=0; y<140; y=y+1) {

        let wave = (winMouseX - windowWidth/2)/2
      
      const distortion = cos(frameCount * 0.1 + x * 0.1 + y * 0.1) * wave
      
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
      
      image (five, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}