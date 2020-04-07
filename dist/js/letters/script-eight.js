let eight

function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(1200,600)
  canvas.parent('eight')
  
  
  eight = createGraphics(1200, 600)
  
  eight.textFont(font)
  eight.fill("#1FA774")
  eight.textSize(500)
  eight.textAlign(CENTER, CENTER)
  eight.text("8888", 600, 200)
}

function draw () {
  clear()

  const tileSize = 50

  for (let x = 0; x < 12; x = x+1) {
  
  for (let y = 0; y < 12; y = y+1) {
    
    let position = (winMouseX / windowWidth)
    position = easeInOutQuad(position)

    
    const sx = x
    const sy = y * tileSize * position
    const sw = 1200
    const sh = tileSize * position + (600 - tileSize) * (1.02-position)
    
    const dx = x 
    const dy = y * tileSize
    const dw = 1200
    const dh = tileSize
    
    image(eight, dx, dy, dw, dh, sx, sy, sw, sh)
  }
}
}