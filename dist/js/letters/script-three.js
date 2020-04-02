let three


function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(1000, 800)
  canvas.parent('three')
  
  three = createGraphics(1000,800)
  
  three.textSize(850)
  three.textAlign(CENTER, CENTER)
  three.fill("#E9E9E9") 
  three.textFont (font) 
  three.text("3", 500, 240)
}

function draw () {
  
  clear()
  
  const tileSize = 5
  
  for (let x=0; x<200; x=x+1) { 
    for (let y=0; y<160; y=y+1) { 

        const wave = 0.01
        const xDistort = (winMouseX - windowWidth/2 + 50) * 0.4
        const yDistort = (winMouseY - windowHeight/2 + 50) * 0.4
  
        const distortion = frameCount
        
        const distortionX = sin(distortion * wave + x *  + y * 0.1) * - xDistort
        const distortionY = sin(distortion * wave + x * 0.1 + y) * - yDistort
        
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
      
      image (three, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}