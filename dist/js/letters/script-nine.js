let nine


function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(1000, 800)
  canvas.parent('nine')
  
  nine = createGraphics(1000,800)
  
  nine.textSize(850)
  nine.textAlign(CENTER, CENTER)
  nine.fill("#E9E9E9") 
  nine.textFont (font) 
  nine.text("9", 500, 240)
}

function draw () {
  
  clear()
  
  const tileSize = 4
  
  for (let x=0; x<250; x=x+1) { 
    for (let y=0; y<200; y=y+1) { 

        const wave = 0.05
        const xDistort = (winMouseX - windowWidth/2 - 50) * 0.5
        const yDistort = (winMouseY - windowHeight/2 - 50) * 0.5
  
        const distortion = frameCount
        
        const distortionX = sin(distortion * wave + y * 0.5) * xDistort
        const distortionY = sin(distortion * wave + x * 0.5) * yDistort
        
        //source
        let sx = x * tileSize 
        let sy = y * tileSize
        let sw = tileSize
        let sh = tileSize
        //destination
        let dx = x * tileSize - distortionX
        let dy = y * tileSize - distortionY
        let dw = tileSize
        let dh = tileSize
      
      image (nine, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}