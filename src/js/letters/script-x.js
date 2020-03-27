let xLetter

function preload () {
  font = loadFont("fonts/fredokaone-regular.ttf")
}

function setup () {
  let canvas = createCanvas(800,800)
 	canvas.parent('x')
  
     xLetter = createGraphics(800, 800)
  
     xLetter.textFont(font)
     xLetter.fill("#353E8F")
     xLetter.textSize(400)
     xLetter.textAlign(CENTER, CENTER)
     xLetter.text("X", 400, 360)
}

function draw () {
  background("#111C86")

  const tileSize = 50
  
  for (let y = 0; y < 16; y = y+1) {
      
    for (let x=0; x <16; x=x+1) {
        
        let position = frameCount
    
        // loop over 120 frames
        position = position % 160
        
        // on the back half, we want to reverse
        if (position > 80) {
        position = 160 - position
        }
        
        // make sure it's between 0 and 1
        position = position / 80
        
        position = easeInOutCubic(position)
        
        const sx = x * tileSize * position
        const sy = y * tileSize * position
        const sw = tileSize * position + (1600 - tileSize) * (1-position)
        const sh = tileSize * position + (1600 - tileSize) * (1-position)
        
        const dx = x * tileSize
        const dy = y * tileSize
        const dw = tileSize
        const dh = tileSize
        
        image(xLetter, dx, dy, dw, dh, sx, sy, sw, sh)
    }
    

  }
}


