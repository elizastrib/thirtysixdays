let six    

function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(800, 500)
  canvas.parent('six')
  
  six = createGraphics(800,500)
  
  six.textSize(500)
  six.textAlign(CENTER, CENTER)
  six.fill("#256433")
  six.textFont (font)
  six.text("6", 400, 150)
}

function draw () {
  
  clear()
  
  const tileSize = 5
  const block = 25
  
  for (let x=0; x<160; x=x+1) { 
    for (let y=0; y<100; y=y+1) {
      

      let wave = (winMouseY - windowHeight/2)/6
         
      
      const distortion = sin(frameCount * 0.2 + x * 0.5 + y * 0.2) * wave
      
      //source
      const sx = x * tileSize + distortion
      const sy = y * tileSize  + distortion
      const sw = tileSize 
      const sh = block
      
      //destination
      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = block
      
      image (six, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}





