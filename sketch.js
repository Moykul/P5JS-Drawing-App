//global variables required throughout the program
let brushSize = 20;
let brushCol;
let sldr;
let btnClear;
let btnSave;
let myDraw;

function setup() {
  //will need the myDraw later to save the canvas
  myDraw = createCanvas(400, 400);
  background(240);
  noStroke();
  //slider for the brush size
  sldr = createSlider(10, 100, 40);
  sldr.position(0, height+25);
  brushColor = color(50);
  //button to clear the canvas
  btnClear = createButton('start Over');
  btnClear.mousePressed(changeBG);
  btnClear.position(width/2, height + 25);
  //button to save the drawing created on the canvas
  btnSave = createButton('Save drawing');
  btnSave.position(width - 100, height + 25);
  btnSave.mousePressed(saveMP);

}

function draw() {
  // calling the function to select the colours
  drawApp();
    
}
//brush function
function mouseDragged(){
  //slider value to assign brush size
  brushSize = sldr.value();
  //assign brush colour
  fill(color(brushColor));
  //brush
  circle(mouseX,  mouseY, brushSize );
}
// very simple function to select and change colours for the brush
function drawApp(){
  // pick a colour from the selection 
  fill(75, 75, 75);
  circle(35, 40, 60);
  fill(255, 100, 100);
  circle(100, 40, 60);
  fill(80, 100, 220);
  circle(165, 40, 60);
  fill(100, 250, 100);
  circle(230, 40, 60);
  fill(210, 250, 50);
  circle(295, 40, 60);  
  fill(255);
  circle(360, 40, 60);
  
  //control structure to assign colour to brush
  if(mouseIsPressed){
    if(mouseY<=100){
      print(mouseX)
      if (mouseX <= 60) {
        //black
        brushColor = color(75, 75, 75);    
    }else if (mouseX <= 120) {
        //red
        brushColor = color(255, 100, 100);
    }else if (mouseX <= 190) {
        //Blue
        brushColor = color(80, 100, 220);
    }else if (mouseX <= 250) {
        //Green
        brushColor = color(100, 250, 100);
    }else if (mouseX <= 310) {
        //Yellow
        brushColor = color(210, 250, 50);
    }else if (mouseX <= 360) {
        //White
        brushColor = color(255);
    }
  }
}
}

// function to reset the background
function changeBG() {
  background(240);

}

//function to save drawing masterpiece
function saveMP(){
  let myDrawing = saveCanvas(myDraw, "myDrawing", "jpg");
}