// El Lissitzky, Proun 93

function setup() {
    createCanvas(600, 600);
  
    //---FONDO
    background (179, 155, 120);
  
    //---CIRCULO FONDO
    fill(200, 185, 165);
    noStroke();
    ellipse(300, 300, 560, 560)
  
    //---QUAD CHICO
    fill(0)
    quad(150, 300, 182, 274, 136, 350, 102, 375)
  
    //---QUAD GRANDE
    fill(0)
    quad(240, 332, 300, 283, 212, 426, 153, 473)
  
    //---LINEA SOMBRA QUAD CHICO
    stroke(120)
    strokeCap(SQUARE)
    strokeWeight(8);
    line(186, 275, 140, 352)
  
    //---LINEA SOMBRA QUAD GRANDE
    
    line(304, 285, 217, 426)
  
    //---LINEA ROJA
    stroke(170, 108, 57)
    strokeCap(SQUARE)
    strokeWeight(7);
    line(281, 270, 113, 419)
    line(113, 415, 162, 475)
  
    //---LINEA AZUL
    stroke(31, 25, 89)
    line(262, 251, 146, 355)
    line(150, 354, 216, 430)
    line(215, 427, 157, 474)
  
  }
  
   //---FUNCION CIRCULOS
   function draw() {
    stroke(1);
    strokeWeight(1.7);
    noFill();
    let x = 330;
    let y = 220;
    let d = 20;
  
    for (let z=0; z<12; z++){
      circle(x, y, d);
      x += 4.5;
      y -= 4.5;
      d += 20;
     }
   }
  
  
  
    
  
    
   
    
    
   