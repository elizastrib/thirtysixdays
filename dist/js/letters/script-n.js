let n

function preload () {
  font = loadFont("fonts/spacegrotesk-medium.otf")
}

function setup () {
  let canvas = createCanvas(windowWidth,600)
 	canvas.parent('n')
  
  n = createGraphics(windowWidth, 600)
  
  n.textFont(font)
  n.fill("#ffd1ff")
  n.textSize(500)
  n.textAlign(CENTER, CENTER)
  n.text("NNNNNNNNN", 600, 260)
}

function draw () {
  background("#2d4be7")

  const tileSize = 50
  
  for (let y = 0; y < 12; y = y+1) {
    
    let position = frameCount
    
    // loop over 120 frames
    position = position % 120
    
    // on the back half, we want to reverse
    if (position > 60) {
      position = 120 - position
    }
    
    // make sure it's between 0 and 1
    position = position / 60
    
    position = easeInOutCubic(position)
    
    const sx = 0
    const sy = y * tileSize * position
    const sw = windowWidth
    const sh = tileSize * position + (600 - tileSize) * (1-position)
    
    const dx = 0
    const dy = y * tileSize
    const dw = windowWidth
    const dh = tileSize
    
    image(n, dx, dy, dw, dh, sx, sy, sw, sh)
  }
}


