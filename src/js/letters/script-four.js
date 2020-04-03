let four


function preload () {
  font = loadFont("fonts/SpaceMono-Bold.ttf")
}

function setup () {
  var canvas = createCanvas(1000, 800)
  canvas.parent('four')
  
  four = createGraphics(1000,800)
  
  four.textSize(850)
  four.textAlign(CENTER, CENTER)
  four.fill("#FF9494") 
  four.textFont (font) 
  four.text("4", 500, 240)
}

function draw () {
  
  clear()
  
  const tileSize = 5
  
  for (let x=0; x<200; x=x+1) { 
    for (let y=0; y<160; y=y+1) { 

        const wave = (winMouseX - windowWidth/2 + 50) * 0.005
        const xDistort = (winMouseX - windowWidth/2 + 50) * 0.005
        const yDistort = (winMouseY - windowHeight/2 + 50) * 0.005
  
        const distortion = frameCount
        
        const distortionX = tan(distortion * wave + x *  + y * 0.5) * - xDistort
        const distortionY = tan(distortion * wave + x * 0.5 + y) * - yDistort
        
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
      
      image (four, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}