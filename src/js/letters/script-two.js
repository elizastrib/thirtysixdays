let two


function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(800, 800)
  canvas.parent('two')
  
  two = createGraphics(800,800)
  
  two.textSize(850)
  two.textAlign(CENTER, CENTER)
  two.fill("#DFD4E8") 
  two.textFont (font) 
  two.text("2", 400, 240)
}

function draw () {
  
  clear()
  
  const tileSize = 5
  
  for (let x=0; x<160; x=x+1) { 
    for (let y=0; y<160; y=y+1) { 

        const wave = 0.2
        const xDistort = (winMouseX - windowWidth/2 + 50) * 0.1
        const yDistort = (winMouseY - windowHeight/2 + 50) * 0.1
  
        const distortion = frameCount
        
        const distortionX = sin(distortion * wave + x *  + y * 0.2) * -xDistort
        const distortionY = sin(distortion * wave + x * 0.2 + y) * -yDistort
        
        //source
        let sx = x * tileSize - distortionX
        let sy = y * tileSize - distortionY
        let sw = tileSize
        let sh = tileSize
        //destination
        let dx = x * tileSize
        let dy = y * tileSize
        let dw = tileSize
        let dh = tileSize
      
      image (two, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}