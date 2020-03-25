let o

function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}

function setup () {
  let canvas = createCanvas(1200,600)
 	canvas.parent('o')
  
  o = createGraphics(1200, 600)
 
  o.textFont(font)
  o.fill("#403353")   
  o.textSize(500)
  o.textAlign(CENTER, CENTER)
  o.text("O", 600, 260)
}

function draw () {
  background("#cbbcce")

  const tileSize = 50
  
  for (let x = 0; x < 24; x = x+1) {
    
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
    
    const sx = x * tileSize * position
    const sy = 0
    const sw = tileSize * position + (1200 - tileSize) * (1-position)
    const sh = 600
    
    const dx = x * tileSize
    const dy = 0
    const dw = tileSize
    const dh = 600
    
    
    image(o, dx, dy, dw, dh, sx, sy, sw, sh)
    
  }
}


