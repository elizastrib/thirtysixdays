let q

function preload () {
  font = loadFont("fonts/ptserif-bold.ttf")
}

function setup () {
  var canvas = createCanvas(1000, 1000)
  canvas.parent('q')
  
  q = createGraphics(1000,1000)
  
  q.textSize(600)
  q.textAlign(CENTER, CENTER)
  q.fill("rgba(123,164,177,0.5)") 
  q.textFont (font) 
  q.text("Q", 500, 350)
}

function draw () {
  
  background("#E0F9ED") 
  
  const tileSize = 8
  const block = 50
  
  for (let x=0; x<125; x=x+1) { 
    for (let y=0; y<125; y=y+1) { 
      
      
      let position = frameCount
      position = position % 120
      if (position > 60) {
        position = 120 - position
      }
      position = position/60
      position = easeInOutQuint(position)
      
      
      const distortion = sin(frameCount * 0.1 + x * 0.5 + y * 0.2) * 10
      
      //source
      const sx = x * tileSize + distortion*3
      const sy = y * tileSize * position  + distortion*1.5 
      const sw = block
      const sh = tileSize * position + (600 - tileSize) * (1 - position)
      
      //destination
      const dx = x * tileSize - distortion 
      const dy = y * tileSize + distortion
      const dw = block
      const dh = tileSize
      
      image (q, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}