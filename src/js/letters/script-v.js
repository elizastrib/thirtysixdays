let v

function preload () {
  font = loadFont("fonts/archivoblack-regular.ttf")
}

function setup () {
  let canvas = createCanvas(1200,800)
 	canvas.parent('v')
  
  v = createGraphics(1200, 800)
 
  v.textFont(font)
  v.fill("#DDF3DF")   
  v.textSize(280)
  v.textAlign(CENTER, CENTER)
  v.text("VVVV", 600, 400)
}

function draw () {
  background("#24173F")

  const tileSize = 50
  
  for (let x = 0; x < 24; x = x+1) {
    
    let position = frameCount
    
    // loop over 120 frames
    position = position % 200
    
    // on the back half, we want to reverse
    if (position > 100) {
      position = 200 - position
    }
    
    // make sure it's between 0 and 1
    position = position / 100
    
    position = easeInOutQuad(position)
    
    const sx = x * tileSize * position
    const sy = 0
    const sw = tileSize * position + (1200 - tileSize) * (1-position)
    const sh = 800
    
    const dx = x * tileSize
    const dy = 0
    const dw = tileSize
    const dh = 800
    
    image(v, dx, dy-200, dw, dh, sx, sy, sw, sh)
    image(v, dx, dy, dw, dh, sx, sy, sw, sh)
    image(v, dx, dy+200, dw, dh, sx, sy, sw, sh)
    
  }
}


