let one


function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(800, 800)
  canvas.parent('one')
  
  one = createGraphics(800,800)
  
  one.textSize(850)
  one.textAlign(CENTER, CENTER)
  one.fill("#3D1058") 
  one.textFont (font) 
  one.text("1", 400, 240)
}

function draw () {
  
  clear()
  
  const tileSize = 5
  
  for (let x=0; x<160; x=x+1) { 
    for (let y=0; y<160; y=y+1) { 

        const wave = 0.5
        const xDistort = (winMouseX - windowWidth/2) * 0.05
        const yDistort = (winMouseY - windowHeight/2) * 0.05
  
        const distortion = frameCount
        
        const distortionX = sin(distortion * wave + x * 0.5 + y * 0.2) * xDistort
        const distortionY = sin(distortion * wave + x * 0.5 + y * 0.2) * yDistort
        
        //source
        let sx = x * tileSize + distortionX
        let sy = y * tileSize + distortionY
        let sw = tileSize
        let sh = tileSize
        //destination
        let dx = x * tileSize
        let dy = y * tileSize
        let dw = tileSize
        let dh = tileSize
      
      image (one, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}